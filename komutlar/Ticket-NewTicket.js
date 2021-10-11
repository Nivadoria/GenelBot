const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message,args) => {

        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send(ayarlar.yönetici2)
    if (!db.get("ticket.category")) return message.channel.send("Ticket kategorisi ayarlanmamış \`" + ayarlar.prefix + "setcategory [Category ID]\` yazarak ayarlayın!")
    if (!message.guild.channels.cache.get(db.get("ticket.category"))) return message.channel.send("Eski ayarlanmış kategoriye ulaşamıyorum \`" + ayarlar.prefix + "setcategory [ID]\` yazarak yeni bir kategori seçin.")
        const name = message.author.username
    if (!message.guild.roles.cache.get(ayarlar.staff)) {
        message.guild.channels.create("ticket-" + name, {
  type: 'text',
  parent: db.get("ticket.category"),
  permissionOverwrites: [
     {
       id: message.author.id,
       allow: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
     {
       id: message.guild.roles.everyone.id,
       deny: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
  ],
}).then(channel => {
    db.set(channel.id + ".ticket", "true")
    db.set(channel.id + ".author", message.author.id)
    message.channel.send("Ticketin burda: <#" + channel.id + ">")
    const { MessageButton, MessageActionRow } = require('discord-buttons')
let lock = new MessageButton()
  .setStyle('red')
  .setLabel('🔒 Ticketi kilitlemek için tıklayın.') 
  .setID('lock') 

let close = new MessageButton()
  .setStyle('blurple')
  .setLabel('🔑 Ticketi kapatmak için tıklayın') 
  .setID('close')

let buttons = new MessageActionRow()
  .addComponents(lock, close);
    
    channel.send("Ticket Kontrol Panel", buttons)
    })
    }
    else {
    message.guild.channels.create("ticket-" + name, {
  type: 'text',
  parent: db.get("ticket.category"),
  permissionOverwrites: [
     {
       id: message.author.id,
       allow: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
     {
       id: message.guild.roles.everyone.id,
       deny: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
    {
       id: process.env.staff,
       allow: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
  ],
}).then(channel => {
    db.set(channel.id + ".ticket", "true")
    db.set(channel.id + ".author", message.author.id)
    message.channel.send("Ticketin burda: <#" + channel.id + ">")
    const { MessageButton, MessageActionRow } = require('discord-buttons')
let lock = new MessageButton()
  .setStyle('red')
  .setLabel('🔒 Ticketi kilitlemek için tıklayın.') 
  .setID('lock') 

let close = new MessageButton()
  .setStyle('blurple')
  .setLabel('🔑 Ticketi kapatmak için tıklayın') 
  .setID('close')

let buttons = new MessageActionRow()
  .addComponents(lock, close);
    
    channel.send("Ticket Control Panel", buttons)
    })
    }
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ticket'],
    permLevel: 0
 }
   
 exports.help = {
    name: 'ticket'
 }