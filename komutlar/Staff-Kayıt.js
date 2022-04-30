const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
   
    
let kanal = "893573481550217216"
let chat = "893574103221555270"
let alınacakrol = "841781008528703488"
let kayıtrol = "841075366546243624"
let kayıtçı = "841788354559082556"
let çizgi = "|"
let age = "12" 


   
    
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`Bu komutu kullanabilmen için <@&${kayıtçı}> adlı role sahip olman lazım.`))
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`Bu komutu  sadece <#${kanal}> adlı kanalda kullanabilirsin.`))

let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`Kayıt edeceğin kullancıyı belirt.`))
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`Lütfen bir isim belirt.`))
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`Lütfen bir yaş belirt.`))
if (yaş < 12) return message.channel.send(new discord.MessageEmbed().setColor('2f3136').setDescription(`Sunucuda yaş engel sistemi aktif minimum \`${age}\` yaşındakiler kayıt olabilir`))
member.roles.remove(alınacakrol)
member.roles.add(kayıtrol)

const başarılı = new discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`Kayıt edilen kullanıcı: ${member} \n Kayıt eden yetkili: <@!${message.author.id}>\n`)
.addField(`${client.emojis.cache.get('833777856516456468')} Kullanıcının ismi:`, `${isim}`, true)
.addField(`${client.emojis.cache.get('809186477258178611')} Kullanıcının yaşı:`, `${yaş}`, true)

message.channel.send(başarılı)
db.add(`kayıtsayı.${message.author.id}.toplam`, 1);
member.setNickname(`${isim} ${çizgi} ${yaş}`)
member.guild.channels.cache.get(chat).send(`${member} Aramıza hoşgeldin.`)


}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıt'],
  permlevel: 0
}
exports.help = {
  name: 'kayıt',
  description: 'Üye olarak kayıt eder',
  usage: ''
}