const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db =  require("quick.db");
const talkedRecently = new Set();

let botid = ('779686354317213717') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(` <a:ta2:781267604752171010> **Ares Bot Kayıt Menüsüne Hoşgeldiniz**  <a:ta2:781267604752171010>`)
        .setDescription(`
 
  **» ${prefix}alınacak-rol** <a:yldz:781260109863059462> Kayıt Edilen Kişiden Alınacak Rolü Ayarlar.
  **» ${prefix}alınacak-rol sıfırla ** <a:yldz:781260109863059462> Kayıt Edilen Kişiden Alınacak Rolü Sıfırlar.
  **» ${prefix}kayıt-kanal** <a:yldz:781260109863059462> Kayıtın Yapılacağı Kanalı Belirlersiniz.
  **» ${prefix}kayıt-kanal sıfırla** <a:yldz:781260109863059462> Kayıtın Yapılacağı Kanalı Sıfırlarsınız.
  **» ${prefix}kayıt-hg ** <a:yldz:781260109863059462> Gelen Kullanıcılara Kayıt Bilgisi Verir.
  **» ${prefix}kayıt-hg sıfırla ** <a:yldz:781260109863059462> Kayıt Hg sistemini sıfırlar.
  **» ${prefix}kayıt-yetkili** <a:yldz:781260109863059462> Kayıt Edebilecek Yetkiyi Ayarlar.
  **» ${prefix}kayıt-yetkili sıfırla** <a:yldz:781260109863059462> Kayıt Edebilecek Yetkiyi Sıfırlar.
  **» ${prefix}erkek-rol ** <a:yldz:781260109863059462> Kayıt Edilince Verilecek Erkek Rolü Ayarlar.
  **» ${prefix}erkek-rol sıfırla ** <a:yldz:781260109863059462> Kayıt Edilince Verilecek Erkek Rolünü Sıfırlar.
  **» ${prefix}kız-rol** <a:yldz:781260109863059462> Kayıt Edilince Verilecek Kız Rolü Ayarlar.
  **» ${prefix}kız-rol sıfırla** <a:yldz:781260109863059462> Kayıt Edilince Verilecek Kız Rolünü Sıfırlar.
  **» ${prefix}erkek ** <a:yldz:781260109863059462> Erkekleri Kayıt Etmeye Yarar.
  **» ${prefix}kız ** <a:yldz:781260109863059462> Kızları Kayıt Etmeye Yarar.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
               .addField(`» Ares Bot Bağlantıları`, ` 🔥 [Bot Davet Linki](https://bit.ly/393uvjH) **|** [Destek Sunucusu](https://discord.gg/eK8AEYn5Nv) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** 🔥`)
        .setImage('https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif')        
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'kayıt-sistemi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kayıt-sistemi'
};