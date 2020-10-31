const Discord = require("discord.js");
const Database = require("../Helpers/Database");


exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") && !message.member.hasPermission("MANAGE_GUILD")) return message.reply("Yetkin Yok!");

    const db2 = new Database("./Servers/" + message.guild.id, "Invites");

db2.set("invites")
message.channel.send("Davetler Sıfırlandı")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'davetleri-sıfırla',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};

