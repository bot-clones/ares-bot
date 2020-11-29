const Discord = require("discord.js");

exports.run = (client, message) => {

const AresBot = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Ares Bot** \n**Efkarınız:** **%${AresBot}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: " Ares Bot | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
