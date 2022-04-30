const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
  if(!database.fetch(message.guild.id) || database.fetch(message.guild.id).length <= 0) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription('\\❌ **| Daha önce hiç mesaj silinmemiş.**'));
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription('\\❌ **| Bir sayı belirtmelisin.**'));
  if(isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription('\\❌ **| Bir sayı belirtmelisin.**'));
  if(args[0] > database.fetch(message.guild.id).length) args[0] = database.fetch(message.guild.id).length;


  var silinenler = database.fetch(message.guild.id).slice(database.fetch(message.guild.id).length-args[0]);

  const embed = new Discord.MessageEmbed()
  .setColor('#00ffdd')
  .setDescription(silinenler.sort((a, b) => a.messageCREATEDAT - b.messageCREATEDAT).reverse().map(x => `**${x.authorTAG}**: ${x.messageCONTENT}`).slice(0, 50).join('\n'))
  .setTitle('Silinen Mesaj Listesi;');
  if(embed.description.length > 1000) return message.channel.send(new Discord.MessageEmbed().setColor("#ff0000").setFooter(client.user.username,client.user.avatarURL()).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})).setTimestamp().setDescription('\\❌ **| Silinen mesajların arasında çok uzun bir mesaj bulunduğu için bunu gösteremiyorum.**'));

  return message.channel.send(embed);


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'snipe'
};