const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const { MessageButton } = require("discord-buttons")
const ayarlar = require('../ayarlar.json')


exports.run = async(client, message,args) => {

        if (!ayarlar.staff) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(ayarlar.yönetici)
    let button = new MessageButton()
  .setStyle('blurple')
  .setLabel('Ticket Aç') 
  .setID('open');

message.channel.send('Ticket oluşturmak için tıklayın!', button);
    }
    else {
        if (!message.member.roles.cache.has(ayarlar.staff)) return message.channel.send("You don't have the required permission to run this command")
    let button = new MessageButton()
  .setStyle('blurple')
  .setLabel('Ticket Aç') 
  .setID('open');

message.channel.send('Ticket oluşturmak için tıklayın!', button);
    }
    
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['setup'],
        permLevel: 0
     }
       
     exports.help = {
        name: 'setup'
     }