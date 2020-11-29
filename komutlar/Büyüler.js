const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor('PİNK')
      .setAuthor(`Ares Bot`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)

.addField("<:ty:752508915266355221>| a!avada : Kullanımı a!avada ", "Yazınca Avada Büyüsü Atarsın")
.addField("<:ty:752508915266355221>| a!expecto-patronum : a!expecto-patronum ", "Expecto Patronum Büyüsü Atarsın")
.addField("<:ty:752508915266355221>| a!lumos : Kullanım : a!lumos", "Lumos Büyüsü Atarsınız")
.addField("<:ty:752508915266355221>| a!protego : Kullanım :  a!protego", "Protego Büyüsü Atarsınız")

return message.channel.sendEmbed(eğlence);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'hogwarts-büyü',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
};
  