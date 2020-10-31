const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../cryptoconfig.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Koruma Sistemi Yardım Menüsü`)
 .setDescription(`
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}ban-koruma #kanal** \n-> Ban koruma sistemini açar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}ban-koruma-sıfırla** \n-> Ban koruma sistemini sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kanal-koruma #kanal** \n-> Kanal koruma sistemini açar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kanal-koruma-sıfırla** \n-> Kanal koruma sistemini sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}rol-koruma #kanal** \n-> Rol koruma sistemini açar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}rol-koruma-sıfırla** \n-> Rol koruma sistemini sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}spam-koruma** \n-> Spam koruma sistemini açar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}spam-koruma-kapat** \n-> Spam koruma sistemini kapatır.`)
 .setFooter(`Crypto`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'korumasistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};