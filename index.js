const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const http = require('http')
const express = require('express')
const ayarlar = require('./ayarlar.json')
const app = express()
const db = require('quick.db')
const moment = require('moment')
require('moment-duration-format')
moment.locale('tr')
require('./util/eventLoader.js')(client)

const disbut = require("discord-buttons");
disbut(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./komutlar/', (Error, Files) => {
    if (Error) console.error(Error)
    console.log(`${Files.length} Komut Yüklenecek!`)
    Files.forEach(Pepe => {
        let Props = require(`./komutlar/${Pepe}`)
        console.log(`Yüklenen Komut: ${Props.help.name}`)
        client.commands.set(Props.help.name, Props)
        Props.conf.aliases.forEach(Alias => {
        client.aliases.set(Alias, Props.help.name)
})})})

client.reload = command => {
 return new Promise((Resolve, Reject) => {
 try {
 delete require.cache[require.resolve(`./komutlar/${command}`)]
 let CMD = require(`./komutlar/${command}`)
 client.commands.delete(command)
 client.aliases.forEach((CMD, Alias) => {
 if (CMD === command) client.aliases.delete(Alias)
 })
 client.commands.set(command, CMD)
 CMD.conf.aliases.forEach(Alias => {
 client.aliases.set(Alias, CMD.help.name)
 })
 Resolve()
 } catch (Hata) {
 Reject(Hata)
}})}

client.load = command => {
 return new Promise((Resolve, Reject) => {
 try {
 let CMD = require(`./komutlar/${command}`)
client.commands.set(command, CMD)
CMD.conf.aliases.forEach(Alias => {
client.aliases.set(Alias, CMD.help.name)
})
Resolve()
} catch (Hata) {
Reject(Hata)
}})}

client.unload = command => {
 return new Promise((Resolve, Reject) => {
 try {
 delete require.cache[require.resolve(`./komutlar/${command}`)]
 let CMD = require(`./komutlar/${command}`)
 client.commands.delete(command)
 client.aliases.forEach((CMD, Alias) => {
 if (CMD === command) client.aliases.delete(Alias)
 })
 Resolve()
 } catch (Hata) {
 Reject(Hata)
}})}
 

client.elevation = message => {
    if (!message.guild) {
        return
    }
    let permlvl = 0
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3
    if (message.author.id === ayarlar.sahip) permlvl = 4
    return permlvl
}
process.on('unhandledRejection', (reason, promise) => {
if (reason.message === "Cannot read property 'message' of undefined") return
})


//Register
client.on("guildMemberAdd", member => {
let guild = member.guild;
let Kanal = "İD"
let Staff = "İD"
let Aylarr = {"01": "Ocak","02": "Şubat","03": "Mart", "04": "Nisan","05": "Mayıs","06": "Haziran","07": "Temmuz","08": "Ağustos","09": "Eylül","10": "Ekim","11": "Kasım","12": "Aralık"};
let Aylar = Aylarr;
          
let user = client.users.cache.get(member.id);
require("moment-duration-format");
          
const Kuruluş = new Date().getTime() - user.createdAt.getTime();
const Ay = moment.duration(Kuruluş).format("M");
var kontrol = [];
          
if (Ay < 1) {
kontrol = `${client.emojis.cache.get('İD')} \`Şüpheli\``;
}
if (Ay > 1) {
kontrol = `${client.emojis.cache.get('İD')} \`Güvenilir\``;
}
          
if (!Kanal) return;
const Embed = new Discord.MessageEmbed()
.setColor("36393F")
.setDescription(`
${client.emojis.cache.get('İD')} **Hoşgeldin!** ${member.user}, seninle beraber **${guild.memberCount}** kişi olduk!
${client.emojis.cache.get('İD')} Sunucuya kayıt olabilmek için **İsim** ve **Yaş** belirtmelisin.
${client.emojis.cache.get('İD')} Hesap Kuruluş: **${moment(user.createdAt).format("DD")} ${Aylar[moment(user.createdAt).format("MM")]} ${moment(user.createdAt).format("YYYY HH:mm:ss")}**
${client.emojis.cache.get('İD')} Bu kullanıcı: ${kontrol}
${client.emojis.cache.get('İD')} <@&${Staff}> Rolündeki yetkililer sizinle ilgilenecektir.`);
          
client.channels.cache.get(Kanal).send(`<@&${Staff}>`,Embed);
});



//Snipe
client.on('messageDelete', async message => {
if(message.author.bot || !message.content) return;
require('quick.db').push(message.guild.id, {
author: message.author,
authorTAG: message.author.tag,
authorID: message.author.id,
authorUSERNAME: message.author.username,
authorDISCRIMINATOR: message.author.discriminator,
messageID: message.id,
messageCHANNEL: message.channel,
messageCHANNELID: message.channel.id,
messageCONTENT: message.content,
messageCREATEDAT: message.createdAt
});
});
  
client.login(ayarlar.token)
