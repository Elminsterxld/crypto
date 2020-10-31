const Discord = require('discord.js');
const cryptoconfig = require('./cryptoconfig.json');
const bot = new Discord.Client()
const westra = new Discord.ShardingManager('./crypto.js', {
    totalShards: 1,
    token: cryptoconfig.token
});

westra.spawn(); 

westra.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    westra.broadcastEval("process.exit()");
}, 21600000);