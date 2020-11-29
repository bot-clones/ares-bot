const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('779686354317213717') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`⚜️ **Ares Bot Koruma Menüsüne Hoşgeldiniz** ⚜️`)
        .setDescription(`

  **» ${prefix}ban-koruma #kanal** 🔱 Sunucudan Birini Banlayan Kişiyi Sunucudan Atar Ve Banlananın Banını Açar
  **» ${prefix}ban-koruma-sıfırla ** 🔱 Ayarlanan Ban Koruma Sistemini Sıfırlar.
  **» ${prefix}kanal-koruma #kanal** 🔱 Sunucuda Açılan veya Kapatılan Kanalı Otomatik Kapatır Veya Açar.
  **» ${prefix}kanal-koruma-sıfırla** 🔱 Ayarlanan Kanal Koruma Sistemini Sıfırlar.
  **» ${prefix}rol-koruma #kanal ** 🔱 Sunucuda Açılan veya Kapatılan Rolü Otomatık Kapatır Veya Açar.
  **» ${prefix}rol-koruma-sıfırla ** 🔱 Ayarlanan Rol Koruma Sistemini Sıfırlar.
  **» ${prefix}spam ** 🔱 Spam engel açar.
  **» ${prefix}spamkapat ** 🔱 Spam engel kapatır.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
              .addField(`» Ares Bot Bağlantıları`, ` 🔥 [Bot Davet Linki](https://bit.ly/393uvjH) **|** [Destek Sunucusu](https://discord.gg/eK8AEYn5Nv) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** 🔥`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'koruma-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};