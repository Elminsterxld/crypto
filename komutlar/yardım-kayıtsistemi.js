const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../cryptoconfig.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kayıt Sistemi Yardım Menüsü`)
 .setDescription(`<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}alınacak-rol @rol** \n-> Kayıt edilen kişiden alınacak rolü ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}alınacak-rol sıfırla** \n-> Kayıt edilen kişiden alınacak rolü sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-kanal #kanal** \n-> Kayıtın yapılacağı kanalı belirlersiniz.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-kanal sıfırla** \n-> Kayıtın yapılacağı kanalı sıfırlarsınız.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-hg #kanal** \n-> Kayıt hoş geldin kanalını ayarlarsınız.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-hg sıfırla** \n-> Kayıt hoş geldin kanalını sıfırlarsınız.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-yetkili @rol** \n-> Kayıt edebilecek yetkiyi ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kayıt-yetkili sıfırla** \n-> Kayıt edebilecek yetkiyi sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}erkek-rol @rol** \n-> Kayıt edilince verilecek erkek rolü ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}erkek-rol sıfırla** \n-> Kayıt edilince verilecek erkek rolünü sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kız-rol @rol** \n-> Kayıt edilince verilecek kız rolü ayarlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kız-rol sıfırla** \n-> Kayıt edilince verilecek kız rolünü sıfırlar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}erkek @kullanıcı isim yaş** \n-> Erkekleri kayıt etmeye yarar.
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}kız @kullanıcı isim yaş** \n-> Kızları kayıt etmeye yarar.
`)
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
  name: 'kayıtsistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};