const Discord = require("discord.js")
const {MessageEmbed} = Discord
exports.run = async (client,message,args) =>{




  let yazı = args[0]
  if(!yazı) return message.channel.send("<a:cryptored:770187639801774080> Logo oluşturmak için bir yazı girmelisin.")
  let api = `https://dynamic.brandcrowd.com/asset/logo/1a2ebc7a-1b24-466a-bee7-9a0e8f5d8395/logo?v=4&text=${yazı}`
  const embed = new MessageEmbed()
  .setColor("BLUE")
  .setImage(api)
  message.channel.send(embed)
}
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0,
    kategori: "logo",
}
    exports.help = {
        name: 'arrow',
        description: '',
        usage: '',
   
    };