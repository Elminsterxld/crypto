const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const cryptoconfig = require('../cryptoconfig.json');
let WestraPrefix = cryptoconfig.prefix
let WestraGif = `https://cdn.discordapp.com/attachments/769957882166116353/769974488670011422/standard.gif`

exports.run = (client, message) => {
  if(message.author.id !== "390162986926473216") if(message.author.id !== "488384549479251969") return message.channel.send("Çok yakında...");
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Nsfw Sistemi Yardım Menüsü`)
 .setDescription(`
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}anal** -> __Anal Nsfw Atar.__
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}4k** -> __4K Nsfw Atar.__
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}ass** -> __Ass Nsfw Atar.__
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}pgif** -> __Pgif Nsfw Atar.w__
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}hentai** -> __Hentai Nsfw Atar.__
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}pussy** -> __Pussy Nsfw Atar.__
<a:cryptobyzsyhtik:769976055715856384> **${WestraPrefix}thigh** -> __Thigh Nsfw Atar.__`)
 .setFooter(`Crypto`)
 .setTimestamp()
 .setImage(WestraGif)
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'nsfw',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};