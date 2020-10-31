const ms = require('ms');
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('<a:cryptored:770187639801774080> Yetersiz yetki! gereken yetki; `MESAJLARI YÖNET`.');
    }

    // Giveaway message ID
    let messageID = args[0];
    // If no channel is mentionned
    if(!messageID){
        return message.channel.send('<a:cryptored:770187639801774080> Bir mesaj IDsi belirtmelisin!');
    }

    try {
        // Reroll the giveaway
        client.giveawaysManager.reroll(messageID);
        // Success message
        message.channel.send('<a:cryptoonay:770187690402250772> Çekiliş yeniden çekildi!');
    } catch (error) {
        // If the giveaway isn't found
        if(error.startsWith(`<a:cryptored:770187639801774080> ${messageID} IDsi ile başlayan bir çekiliş bulunamadı!.`)){
            message.channel.send("<a:cryptored:770187639801774080> "+messageID + " IDsi ile başlayan bir çekiliş bulunamadı!");
        }
        // If the giveaway is not ended
        if(error.startsWith(`<a:cryptored:770187639801774080> ${messageID} IDsi ile başlayan çekiliş bitmemiş!.`)){
            message.channel.send('<a:cryptored:770187639801774080> Bu çekiliş bitmemiş!');
        }
    }
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yeniden"],
  permLevel: 0
}

exports.help = {
  name: "reroll",
  description: "reroll",
  usage: "w!reroll"
}