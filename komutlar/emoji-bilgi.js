const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let emojiname = args[0];
  const emoji = message.guild.emojis.cache.find(
    doktorbot => doktorbot.name === `${emojiname}`
  );
  if (!emojiname)
    return message.channel.send(
      "<a:yldz:781260109863059462> **Emoji ismi yazmalısın** <a:yldz:781260109863059462>"
    );
  const doktorbot = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(`${emoji.url}`)
    .addField("<a:yldz:781260109863059462> Emojinin ismi", `${emojiname}`)
    .addField("<a:yldz:781260109863059462> Emoji ID", `${emoji.id}`)
    .addField("<a:yldz:781260109863059462> Link", `${emoji.url}`)
    .setTimestamp();
  message.channel.send(doktorbot);
  console.log(doktorbot);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-info"],
  permLevel: 0
};

exports.help = {
  name: "emoji-bilgi",
  description: "",
  usage: ""
};