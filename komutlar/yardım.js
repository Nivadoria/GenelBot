const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const help = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(message.author.tag,message.author.avatarURL({dynamic:true, size:2048}))
.setDescription(`
**Kullanıcı Komutları: [\`avatar\`,\`ping\`,\`snipe\`]

Yetkili Komutları: [\`kayıt\`,\`kayıt-sayı\`]

Kurucu Komutları: [\`vip\`,\`eval\`]**`)
.setFooter(message.guild.name,message.guild.iconURL({dynamic:true, size:2048}))
message.channel.send(help)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};
 
exports.help = {
  name: 'yardım'
};