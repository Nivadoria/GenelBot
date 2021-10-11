const ayarlar = require('../ayarlar.json')

    module.exports = {

    name: 'clickButton',
    execute(button, message) {
        if (button.id === "open") {
        if (!button.guild.me.permissions.has("MANAGE_CHANNELS")) return button.reply.send("❌ Missing Permissions \`Manage Channels\`")
        try {
            const db = require('quick.db')
    if (!db.get("ticket.category")) return button.reply.send("Ticket kategorisi ayarlanmamış \`" + ayarlar.prefix + "setcategory [Category ID]\` yazarak ayarlayın!")
    if (!button.guild.channels.cache.get(db.get("ticket.category"))) return button.reply.send("Eski ayarlanmış kategoriye ulaşamıyorum \`" + ayarlar.prefix + "setcategory [ID]\` yazarak yeni bir kategori seçin.")
        if (!button.guild.roles.cache.get(ayarlar.staff)) {
        const name = button.clicker.user.username
    button.guild.channels.create("ticket-" + name, {
  type: 'text',
  parent: db.get("ticket.category"),
  permissionOverwrites: [
     {
       id: button.clicker.user.id,
       allow: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
     {
       id: button.guild.roles.everyone.id,
       deny: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
  ],
}).then(channel => {
    db.set(channel.id + ".ticket", "true")
    db.set(channel.id + ".author", button.clicker.user.id)
    channel.send("Ticketin burda: <#" + channel.id + ">")
    
    const { MessageButton, MessageActionRow} = require('discord-buttons')
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
                    const db = require('quick.db')
        const name = button.clicker.user.username
    button.guild.channels.create("ticket-" + name, {
  type: 'text',
  parent: db.get("ticket.category"),
  permissionOverwrites: [
     {
       id: button.clicker.user.id,
       allow: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
     {
       id: button.guild.roles.everyone.id,
       deny: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
    {
       id: ayarlar.staff,
       allow: ['VIEW_CHANNEL', "SEND_MESSAGES"],
    },
  ],
}).then(channel => {
    db.set(channel.id + ".ticket", "true")
    db.set(channel.id + ".author", button.clicker.user.id)
    channel.send("Ticketin burda: <#" + channel.id + ">")
    
    const { MessageButton, MessageActionRow} = require('discord-buttons')
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
    } catch (error) {
        console.log(error)
        }
        }
    },
}