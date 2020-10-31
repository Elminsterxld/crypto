const ms = require('ms');

exports.run = async (client, message, args) => {
    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send('<a:cryptored:770187639801774080> Yetersiz yetki! gereken yetki; `MESAJLARI YÖNET`.');
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send('<a:cryptored:770187639801774080> Bir mesaj IDsi belirtmelisin!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('<a:cryptored:770187639801774080> `'+ args.join(' ') + '` adında bir çekiliş bulunamadı.');
    }

    // Edit the giveaway
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    // Success message
    .then(() => {
        // Success message
        message.channel.send('<a:cryptoonay:770187690402250772> Çekiliş '+(client.giveawaysManager.options.updateCountdownEvery/5000)+' saniye sonra bitecek...');
    })
    .catch((e) => {
        if(e.startsWith(`<a:cryptored:770187639801774080> ${giveaway.messageID} IDsi ile başlayan çekiliş zaten bitmiş!.`)){
            message.channel.send('<a:cryptored:770187639801774080> Bu çekiliş zaten bitmiş!');
        } else {
            console.error(e);
            message.channel.send('<a:cryptored:770187639801774080> Hata...');
        }
    });

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çekiliş-bitir"],
  permLevel: 0
}

exports.help = {
  name: "çekilişbitir",
  description: "çekilişi bitirir",
  usage: "w!çekiliş-bitir"
}