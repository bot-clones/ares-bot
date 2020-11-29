const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('779686354317213717') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
       .setTitle(`<a:ta2:781267604752171010> **Ares Bot Yardım Menüsüne Hoşgeldiniz** <a:ta2:781267604752171010>`)
        .setDescription(`
  **» ${prefix}premium-sistemi** <a:yldz:781260109863059462> Premium Komutlarını Gösterir.		
  **» ${prefix}ekonomi** <a:para:781547447675387904> Ekonomi Komutlarını Gösterir.
  **» ${prefix}gif-menü ** <a:du:781547139011575808> Gif Komutlarını Gosterir.
  **» ${prefix}moderasyon** <a:mod:781547129138970644> Moderasyon Komutlarını Gösterir.
  **» ${prefix}moderasyon2** <a:mod:781547129138970644> 2. Moderasyon Komutlarını Gösterir.
  **» ${prefix}kullanıcı** <a:ta1:781267601631608872> Kullanıcı Komutlarıni Gösterir.
  **» ${prefix}hogwarts-büyü** <a:ta1:781267601631608872> Hogwarts Büyülerini Gösterir.
  **» ${prefix}eğlence ** <a:ta2:781267604752171010> Eğlence Komutlarını Gösterir.
  **» ${prefix}seviye-yardım ** <a:lvl:781547128962285628> Seviye Komutlarını Gösterir.
  **» ${prefix}kayıt-sistemi** <a:mod:781547129138970644> Kayıt Komutlarını Gösterir.
  **» ${prefix}koruma-yardım** <a:mod:781547129138970644> Koruma Komutlarını Gösterir.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**
       
`)      .setImage("https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif")
        .setThumbnail(`https://cdn.discordapp.com/attachments/781145277742317568/781261396902019092/standard_1.gif`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
        .addField(`» Ares Bot Bağlantıları`, ` 🍁 [Bot Davet Linki](https://bit.ly/393uvjH) **|** [Destek Sunucusu](https://discord.gg/eK8AEYn5Nv) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** 🍁`)
        .setImage("https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif")
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};