const discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
let kayıtçı = "841788354559082556"
let kayıt = db.fetch(`kayıtsayı.${message.author.id}.toplam`);
let kullanıcı = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


if (!message.member.roles.cache.has(kayıtçı))
return message.channel.send(
new discord.MessageEmbed()
.setColor("RED")
.setDescription(`Bu komutu kullanabilmek için <@&${kayıtçı}> rolüne sahip olmalısın`));

if (!kullanıcı) {
const sayı = new discord.MessageEmbed()
.setColor("BLUE")
.setTitle("Toplam Kayıt Bilgileri")
.setDescription(`\`˃\` Toplam Kayıtların: \`${kayıt || 0}\``);
 message.channel.send(sayı);
}
};
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["kayıt-sayı"],
  permlevel: 0
};
exports.help = {
  name: "kayıt-sayı",
  description: "",
  usage: ""
};
