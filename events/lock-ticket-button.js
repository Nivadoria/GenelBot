const ayarlar = require('../ayarlar.json')

module.exports = {

name: 'clickButton',
execute(button, channel) {
    if (button.id === "lock") {
        if (!button.guild.me.permissions.has("MANAGE_CHANNELS")) return button.reply.send(ayarlar.yönetici2)
        const db = require('quick.db')
        const id = button.channel.id
        const author = db.get(id + ".author")
        
        if (!ayarlar.staff) {
            button.channel.overwritePermissions([
 {
   id: author,
   deny: ['VIEW_CHANNEL', "SEND_MESSAGES"],
},
 {
   id: button.guild.roles.everyone.id,
   deny: ['VIEW_CHANNEL', "SEND_MESSAGES"],
},
],
)
            }
            else {
                button.channel.overwritePermissions([
 {
   id: author,
   deny: ["SEND_MESSAGES"],
   allow: ["VIEW_CHANNEL"],
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
)
                }
            
button.reply.send("Kanal sadece stafflara özel kapatıldı!")
        
        }
    },
};