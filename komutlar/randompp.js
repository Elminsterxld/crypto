const WestraDiscord = require('discord.js');
exports.run = (client, message) => {
  const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setFooter("Crypto")
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))
  message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["random-pp"],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'randompp',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};