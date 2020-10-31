const Discord = require("discord.js")
const db = require("quick.db")
exports.run = (client, message, args) => {
  
   
  let code = args[1]
  let kişi = ''
  let data = db.get(`üyelikk`)
  let kişiAll = db.all().filter(i => i.ID.startsWith('üyelikk_'))
  kişiAll.forEach(s => {
    kişi += s.ID.replace('üyelikk_','<@') + "> \n" 
  })

  const embed = new Discord.MessageEmbed()
  .setAuthor(" Gold Listesi", client.user.avatarURL())
  .setColor(0x36393F)
  .setDescription(kişi)
  .setFooter(client.user.username, client.user.avatarURL())
  return message.channel.send(embed)



 
}

exports.conf = {
  enabled : true,
  guildOnly : false,
  aliases : ["goldliste"],
  permLevel : 0
}

exports.help = {
  name : 'gold-liste',
  description : 'Gold Üyeleri Gösterir.',
  usage : 'w!gold-liste'
}