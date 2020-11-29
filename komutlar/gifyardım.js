const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('709489466913325168') 

exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ta2:781267604752171010> **Ares Bot  Gif Menüsüne Hoşgeldiniz** <a:ta2:781267604752171010>`)
        .setDescription(`
 
        **${prefix}gif-ara** <a:yldz:781260109863059462> Yazdığınız Kelime Hakkında Gif Aratır!
        **${prefix}man-gif** <a:yldz:781260109863059462> Rastgele Erkek Gifi Atar!
        **${prefix}woman-gif** <a:yldz:781260109863059462>Rastgele Kadın Gifi Atar!
        **${prefix}couple-gif** <a:yldz:781260109863059462> Rastgele Sevgili Gifi Atar!
        **${prefix}baby-gif** <a:yldz:781260109863059462> Rastgele Bebek Gifi Atar!
        **${prefix}animal-gif** <a:yldz:781260109863059462> Rastgele Hayvan Gifi Atar!
        **${prefix}marvel-gif** <a:yldz:781260109863059462> Rastgele Marvel Gifi Atar!
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
  aliases: ['Gif-menü'],
  permLevel: 0,
};

exports.help = {
  name: 'gif-menü',
  description: 'a!davet-sistemi Menüsü',
  usage: 'gif-menü'
};