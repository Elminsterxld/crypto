const Discord = require('discord.js');
const db = require('quick.db');


module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`westralogkanal_${message.guild.id}`);
  let westrabasvuruyapılacakkanal = await db.fetch(`westrabasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let westrabasvurugidecekkanal = await db.fetch(`westrabasvurugidecekkanal_${message.guild.id}`, kanal2.id);
let westralogkanal = await db.fetch(`westralogkanal_${message.guild.id}`, kanal3.id);
let westrabotlistyetkilisi = db.fetch(`westrabotlistyetkilirol_${message.guild.id}`)
   if(!message.member.roles.cache.has(westrabotlistyetkilisi)) return message.channel.send(`<a:cryptored:770187639801774080> Bu komutu kullanabilmen için <@&${westrabotlistyetkilisi}> adlı role sahip olman lazım!`)
	let botisim = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
	let log = westralogkanal // Bot Eklendi / Onaylandı / Rededildi Kanalı
	if (!botisim) return message.channel.send(`<a:cryptored:770187639801774080> Botun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
      if (!sahip) return message.channel.send(`<a:cryptored:770187639801774080> Bot sahibinin ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
   if (!sebep) return message.channel.send(`<a:cryptored:770187639801774080> Botun onaylanmama sebebini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
   const westrabumbeyyyy = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setFooter(`Crypto`)
    .setTimestamp()
    .setDescription(`<a:cryptored:770187639801774080> <@${sahip}> adlı kişinin <@${botisim}> adlı botu reddedildi. Sebep: ${sebep} ${sebep1} ${sebep2} ${sebep3} ${sebep4} ${sebep5} Reddeden yetkili: ${message.author}`)
		client.channels.cache.get(log).send(westrabumbeyyyy);// 
		message.channel.send(`<a:cryptored:770187639801774080> Botu reddettiniz.`).then(x => x.delete({timeout: 3000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};