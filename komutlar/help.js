const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message,args) => {

    	const help = new MessageEmbed()
	.setColor('RANDOM')
	.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
	.setTimestamp()
	.addField("📕╎Ticket Commands", "\`ticket , close , add , remove ,\`")
	.addField("🎄╎Staff Commands", "\`setup , setcategory\`")
	message.channel.send(help)
    }

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['help'],
    permLevel: 0
 }
   
 exports.help = {
    name: 'help'
 }
 