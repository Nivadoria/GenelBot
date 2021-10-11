const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message,args) => {

        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send(ayarlar.yönetici2)
        const id = message.channel.id 
    if (!db.get(id + ".ticket")) {
        const unknown = new MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle("\\❌╎Geçersiz kullanım")
    .setDescription("Bu kanal ticket kanalı değil! Bu komut sadece ticket kanallarında işe yarar")
    .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}));
    message.channel.send(unknown)
    }
else {
    const user = args[0]
    if (!user) return message.channel.send("Lütfen üyenin ID'sini girin!")
    if (isNaN(user)) return message.channel.send("Geçersiz ID tespit edildi.")
    if (!client.users.cache.get(user)) return message.channel.send("Böyle bir kullanıcı yok.")
        message.channel.updateOverwrite(user, {
  SEND_MESSAGES: false,
  VIEW_CHANNEL: false
})
const embed = new MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('<@' + user + "> (" + client.users.cache.get(user).tag + ") ticketten silindi!");
    message.channel.send(embed)
    }
    
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['remove'],
    permLevel: 0
 }
   
 exports.help = {
    name: 'remove'
 }