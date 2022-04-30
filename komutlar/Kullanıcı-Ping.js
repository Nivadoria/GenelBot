const Discord = require('discord.js')

exports.run = async (client, message, args) => {
message.channel.send(`My ping: ${client.ws.ping}`)
}

exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ['ping'],
   permLevel: 0
}
  
exports.help = {
   name: 'Ping',
   description: 'Show bot ping',
   usage: 'ping'
}
