const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let westraA = message.guild;
  westraA
    .fetchBans()
    .then(westra =>
    message.channel.send(`<a:cryptored:770187639801774080> Sunucunuzda ${westra.size} banlanmış üye bulunmaktadır.`)
  )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ["bansay"],
  aliases: ["bansay"],
  permLevel: 0
};

exports.help = {
  name: "bansay",
  description: "Sunucudan banlanan kişilerin sayısını gösterir",
  usage: "bansay"
};