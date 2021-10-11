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
    message.channel.delete()
    }
    
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['close'],
    permLevel: 0
 }
   
 exports.help = {
    name: 'close'
 }