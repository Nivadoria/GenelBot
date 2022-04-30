const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async (client, message, args) => {

if (!ayarlar.sahip.includes(message.author.id)) return  message.channel.send('Bu Komutu Kullanmak İçin **`Sahibim`** Olman Lazım!')

const Embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`**${message.guild.name} Server Rules | ${message.guild.name} Sunucu Kuralları**

**ENGLISH**

:one: Any harmful material (viruses, pornographic images/links, links to Discord servers that involve the aforementioned, etc.) results in an immediate and permanent ban.

:two: Inappropriate language (excessive swears, racial slurs, deliberate attempts to instigate negative reactions, etc) will be removed and the User(s) in question will be given a written warning, kicked or banned depending on severity.

:three: Off-topic conversations are not permitted in support. User(s) that post off-topic in the server deliberately will be kicked or banned depending on severity. 

:four: Repeatedly mentioning the developers, support or the moderators can result in a kick/ban at that person’s discretion.

:five: No advertising Discord Servers, or other programs, websites or service.

:six: Nicknames should be Latin characters and numbers only (A-Z / 0-9). If you have a nickname that does not contain them, your username will be changed by the moderators.

**TÜRKÇE**

:one: Herhangi bir zararlı materyal(virüsler, pornografik görüntüler/bağlantılar, Discord sunucularına bağlantılar, vb.) silinir ve sunucu üzerinden kalıcı bir şekilde uzaklaştırılırsınız.

:two: Uygunsiz dil(aşırı küfürler, ırksal hakaretler, olumsuz tepkileri kışkırtmak için kasıtlı girişimler vb.) silinir ve ciddiyete bağlı olarak yazılı uyarı, sunucudan atılma veya sunucu üzerinden kalıcı bir şekilde uzaklaştırılma ile sonuçlanır.

:three: Yardım kanalında konu dışı konuşmalara izin verilmez. 

:four: Tekrar tekrar etiketleme işlemi yapan kişinin taktirine bağlı olarak sunucudan atılacak ya da yasaklanacaktır.

:five: Herhangi bir Discord sunucusu, başka programlar, websiteler ya da servis reklamı sunucumuzda yasaktır.

:six: Kullanıcı adınızda sadece Latin harfleri ve sayıları olmalıdır. Eğer bunları içermeyen bir kullanıcı adına sahipseniz kullanıcı adınız moderatörler tarafından değiştirilecektir.`)

message.channel.send(Embed)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kurallar'],
    permLevel: 0
}
  
exports.help = {
    name: 'Kurallar | Rules'
}