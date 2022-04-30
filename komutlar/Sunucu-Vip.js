const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(ayarlar.yönetici)

//! Nivadoria 🍂#0001

const User = message.mentions.users.first() || client.users.cache.get(args[0])


let member = message.mentions.members.first();

if (!member) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription('\\❌ **| Lütfen bir üye etiketleyin.**'))

if (User.id === message.author.id) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription(`\\❌ **| Kendine vip veremezsin.**`))
if (User.bot) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription(`\\❌ **| Botlara vip veremezsin.**`))


   
//   
member.roles.add(ayarlar.Vip)
//

//.catch(() =>{ return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription('\\❌ **| Rolüm En Yukarıda Olmadığı İçin Vip Rolünü Veremiyorum.**'))})
const Vip = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setFooter(client.user.username, client.user.avatarURL())
.setTimestamp()
.setColor("#00ffdd")
.setDescription(`${client.gold} Vip Rolü Alan Kullanıcı: ${User} \n ${client.yetkili} Vip Rolü Veren Yetkili: <@!${message.author.id}> \n `)

message.channel.send(Vip)

    }

    exports.conf = {
       enabled: true,
       guildOnly: true,
       aliases: ['vip'],
       permLevel: 0
    }
      
    exports.help = {
       name: 'Vip'
    }