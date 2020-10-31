const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:cryptored:770187639801774080> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıtçı rol sıfırlama komutu.`)
.setColor(0x36393F)
.setDescription(`<a:cryptored:770187639801774080> Sunucu için ayarladığınız kayıtçı rol başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Crypto`)
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  
.setTitle(`${client.user.username} | Kayıtçı rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(`<a:cryptored:770187639801774080> Ayarlayacağınız kayıtçı rolü belirtiniz!`)
.setThumbnail(client.user.avatarUR())
.setFooter(`Crypto`)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} | Kayıtçı rol ayarlama komutu.`)
.setColor(0x36393F)
.setDescription(`<a:cryptoonay:770187690402250772> Kayıt edecek rol başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Crypto`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçırol', 'kayıtçı','kayıt-yetkili'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-rol',
  description: 'kız rolünü ayarlar',
  usage: 'dr!kız-rol @rol'
}