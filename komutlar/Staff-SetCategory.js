const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message,args) => {

        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send(ayarlar.yönetici2)
        if (!ayarlar.staff) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(ayarlar.yönetici)
    const id = args[0]
    
    if (!id) {
        const noarg = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\❌ Geçersiz argüman")
    .setDescription("Lütfen destek kategorisi hangi kategori olacaksa o kanalın idsini girin.")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(noarg)
    }
    else {
        const cy = message.guild.channels.cache.get(id)
    if (!cy) {
        const unknown = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\❌╎Geçersiz argüman")
    .setDescription("Girilen ID ile eşleşen bir kategori bulunamadı")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(unknown)
    }
    else if  (cy.type !== "category") {
        const invalid = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\❌╎Geçersiz argüman")
    .setDescription("Girilen ID'ye sahip kanal kategori değil.")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(invalid)
        }
    else {
        db.set("ticket.category", id)
    const end = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\✅ ╎Başarılı")
    .setDescription("Artık ticketler **" + cy.name + "** kategorisinde açılacak.")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(end)
    }
    
    }
    }
    else {
        if (!message.member.roles.cache.has(ayarlar.staff)) return message.channel.send("❌ You don't have the required permission to run this command")    
     const id = args[0]
    
    if (!id) {
        const noarg = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\❌ Geçersiz argüman")
    .setDescription("Lütfen destek kategorisi hangi kategori olacaksa o kanalın idsini girin.")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(noarg)
    }
    else {
        const cy = message.guild.channels.cache.get(id)
    if (!cy) {
        const unknown = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\❌╎Geçersiz argüman")
    .setDescription("Girilen ID ile eşleşen bir kategori bulunamadı")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(unknown)
    }
    else if  (cy.type !== "category") {
        const invalid = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\❌ ╎Geçersiz argüman")
    .setDescription("Girilen ID'ye sahip kanal kategori değil.")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(invalid)
        }
    else {
        db.set("ticket.category", id)
    const end = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\✅ ╎Başarılı")
    .setDescription("Artık ticketler **" + cy.name + "** kategorisinde açılacak.")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(end)
    }
    
    }
    }
    
    }
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['setcategory'],
        permLevel: 0
     }
       
     exports.help = {
        name: 'setcategory'
     }