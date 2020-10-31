const Discord = require("discord.js");
const Database = require("../Helpers/Database");

exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Rewards");
    var data = db.get(`rewards`) || {};

    var list = data.sort((x, y) => y.targetInvite - x.targetInvite);
      if(list.length === 0){
        var yok = new Discord.MessageEmbed()
            .setAuthor("Hiç Bir Rank Ayarlanmamış")
            .setDescription("Ayarlamak İçin c?rütbe-ekle @rol davetsayi");
            return message.channel.send(yok);
        }

    var embed = new Discord.MessageEmbed()
        .addField("Rütbeler", `
    ** **${list.splice(0, 10).map((item, index) => `\`${index + 1}.\` <@&${item.Id}>: \`${item.Invite} Davete\``).join("\n")}
    `);

    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'rütbeler',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};
