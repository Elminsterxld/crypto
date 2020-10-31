const westradiscord = require('discord.js');

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilgi", "sunucubilgi", "sunucu-bilgi", "sb"],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'say',
  description: 'westra',
  usage: 'westra',

};
exports.run = async (client, message, args) => {
  const seskanallari = message.guild.channels.cache.filter(c => c.type === 'voice'); 
  let westracc = 0
  let  westrabroo = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size 
  let metinkanallari = message.guild.channels.cache.filter(m => m.type == "text").size; 
  for (const [id, voiceChannel] of seskanallari) westracc += voiceChannel.members.size;
  const westraembed = new westradiscord.MessageEmbed()
  .setColor("0x36393F")
  .setTitle("Crypto - Say")
  .setFooter("Crypto")
  .setTimestamp()
  .setDescription(`
<a:cryptosiyahhalka:769956810785947669> Toplam üye sayısı: **${message.guild.memberCount}**
<a:cryptosiyahhalka:769956810785947669> Toplam çevrimiçi üye sayısı: **${westrabroo}**
<a:cryptosiyahhalka:769956810785947669> Toplam metin kanalı sayısı: **${metinkanallari}**
<a:cryptosiyahhalka:769956810785947669> Toplam ses kanalı sayısı: **${seskanallari.size}**
<a:cryptosiyahhalka:769956810785947669> Toplam çevrimiçi durumda olan üye sayısı: **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}**
<a:cryptosiyahhalka:769956810785947669> Toplam boşta durumda olan üye sayısı: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}**
<a:cryptosiyahhalka:769956810785947669> Toplam rahatsız etme durumda olan üye sayısı: **${message.guild.members.cache.filter(i => i.presence.status === 'dnd').size}**
`)
  message.channel.send(westraembed)
  }