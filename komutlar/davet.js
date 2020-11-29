const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://bit.ly/393uvjH) \n [__**Destek Sunucusu**__](https://discord.gg/eK8AEYn5Nv) \n [__**Oy Ver**__](https://top.gg/bot/779686354317213717)")
  message.channel.send(davet)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};