const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lapetxs = new Discord.MessageEmbed()
.addField("**Bot Hakkında**", `<a:yldz:781260109863059462>   **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:yldz:781260109863059462>   **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:yldz:781260109863059462>  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("**Bot Sahibi**", `<:dev:781259352815960094> **Bot Sahibi**  <@601799934471307268> \n  `)
.addField("Bot Geliştiricisi",` <:dev:781259352815960094> **Bot Geliştiricisi**  <@601799934471307268> \n `)
.addField("**Sürümler**", ` <:js:781257792639729707>  **Discord.js Sürümü** **|**  **v${Discord.version}** \n <:sun_js:776163650838724670>   **Node.js Sürümü** **|**  **${process.version}**`)
.addField("**Gecikmeler**", `🏓 **${client.ws.ping}** ms`,true)
    .setImage('https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif')
.setColor("RANDOM")
message.channel.send(lapetxs)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istatistik"],
  permLevel: 0
};

exports.help = {
  name: "i",
  description: "labeduz babba.",
  usage: "istatistik"
};