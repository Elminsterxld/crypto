const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../cryptoconfig.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Logo Sistemi Yardım Menüsü`)
 .setDescription(`
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}arrow** \n-> Ok şeklinde logo yapar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}gold** \n-> Altın şeklinde logo yapar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}green** \n-> Yeşil şeklinde logo yapar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}graffiti** \n-> Graffiti şeklinde logo yapar.
`)
 .setFooter(`Crypto`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'logosistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};