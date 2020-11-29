const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
const db = require("quick.db");
let botid = ('779686354317213717') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ta2:781267604752171010>**Ares Bot Seviye Menüsüne Hoşgeldiniz** <a:ta2:781267604752171010>`)
        .setDescription(`
  **» ${prefix}seviye** <a:yldz:781260109863059462> Mevcut Olduğunuz Seviyeyi Gösterir.
  **» ${prefix}seviye-ayarlar** <a:yldz:781260109863059462> Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.
  **» ${prefix}seviye-rol** <a:yldz:781260109863059462> İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.
  **» ${prefix}seviye-sıfırla ** <a:yldz:781260109863059462> Mevcut Seviye Sistemini Sıfırlar
  **» ${prefix}seviye-sınır ** <a:yldz:781260109863059462> Maksimum Kazanılanabilecek Seviyeyi Belirler.
  **» ${prefix}seviye-xp ** <a:yldz:781260109863059462> Bir Mesaj Başına Verilecek Xp yi ayarlar.
  **» ${prefix}seviye-top ** <a:yldz:781260109863059462> Sunucuda ki En yüksek 5 Kişiyi Gösterir
  **» ${prefix}seviye-rütbeler ** <a:yldz:781260109863059462> Hangi Seviye de Rol Verilecek Onu Gösterir.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(``)
             .addField(`» Ares Bot Bağlantıları`, ` 🌐 [Bot Davet Linki](https://bit.ly/393uvjH) **|** [Destek Sunucusu](https://discord.gg/eK8AEYn5Nv) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** 🌐`)
        .setImage('https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif')        
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'seviye-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'seviye-yardım'
};