const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('<a:cryptored:770187639801774080> Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "c?"
 db.delete(`westrabotlistyetkilirol_${message.guild.id}`);
  message.channel.send(`<a:cryptored:770187639801774080> Botlist yetkilisi rolü başarıyla sıfırlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-yetkili-rol-sıfırla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};