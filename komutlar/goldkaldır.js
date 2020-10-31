const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  if(message.author.id !== "390162986926473216") if(message.author.id !== "488384549479251969") return message.channel.send("hoop bilader sahip komutu bu");
  
  let user = client.users.cache.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.channel.send('id belirt moruq')
  
  db.delete(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(`<a:cryptored:770187639801774080> <@${nesne}> adlı kişinin gold üyeliğini başarıyla kaldırdım.`)
//client.channels.cache.get('737989667714105346').send(`<a:gold1:719860487734427708> <@${nesne}> ID'li Kullanıcı Gold Üyeliğe Eklendi.   <a:gold1:719860487734427708>`)
if (client.users.cache.get(''+nesne+'').send(`<a:cryptored:770187639801774080> \`Gold üyeliğiniz kaldırıldı.\` <a:cryptored:770187639801774080>`)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldkaldır', 'gold-kaldır'],
  permLevel: 0
};
exports.help = {
  name: 'goldüyekaldır',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};