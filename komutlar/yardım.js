const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Crypto Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n •  Prefixim: **c?**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `> • [c?kullanıcı](https://discord.gg/usg73fH): **Kullanıcı yardım menüsünü gösterir.**\n > • [c?moderasyon](https://discord.gg/usg73fH): **Moderasyon yardım menüsünü gösterir.**\n > • [c?davetsistemi](https://discord.gg/usg73fH): ** Davet sistemi yardım menüsünü gösterir.**\n > • [c?kayıtsistemi](https://discord.gg/usg73fH): ** Kayıt sistemi yardım menüsünü gösterir.**\n > • [c?korumasistemi](https://discord.gg/usg73fH): ** Koruma sistemi yardım menüsünü gösterir.**\n > • [c?logosistemi](https://discord.gg/usg73fH): ** Logo sistemi yardım menüsünü gösterir.**\n > • [c?botlistsistemi](https://discord.gg/usg73fH): ** Bot list sistemi yardım menüsünü gösterir.**\n > • [c?çekilişsistemi](https://discord.gg/usg73fH): ** Çekiliş sistemi yardım menüsünü gösterir.**`)
  .addField(" • Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş sistemi eklendi!")
  //.addField("• Sponsor:", `• Bize sponsor olan **Önem Bilişim**'e teşekkür ederiz! [Sunucu](https://discord.gg/FNnUg6z) • [Site](https://www.onembilisim.com/)`)
  .addField(" • Linkler:", "• [Davet Et](https://discord.com/oauth2/authorize?client_id=727962543347335179&permissions=8&scope=bot/) • [Destek Sunucusu](https://discord.gg/usg73fH) • [Web Site](https://www.cryptosite.cf/) •")
  .setImage("https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif")
.setFooter("Crypto", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}