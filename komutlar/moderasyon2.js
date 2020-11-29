const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('779686354317213717') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('RANDOM')
       .setTitle(`<a:ta2:781267604752171010> **Ares Bot Moderasyon Menüsüne Hoşgeldiniz** <a:ta2:781267604752171010>`)
        .setDescription(`
  **» ${prefix}mod-log** <a:yldz:781260109863059462> Mod-Log Kanalını Belirlersiniz.
  **» ${prefix}mod-log kapat** <a:yldz:781260109863059462> Ayarlanan Mod-Log Kanalı Kapatılır.
  **» ${prefix}oylama ** <a:yldz:781260109863059462> Oylama Yaparsınız
  **» ${prefix}yasaklı-tag ** <a:yldz:781260109863059462> Yasaklı Tag Ayarlar.
  **» ${prefix}otorol-ayarla** <a:yldz:781260109863059462> Otorol Ayarlar.
  **» ${prefix}otorol-mesaj** <a:yldz:781260109863059462> Otorol Mesajı Ayarlar.
  **» ${prefix}otorol-sıfırla** <a:yldz:781260109863059462> Otorol Sıfırlar.
  **» ${prefix}sayaç-ayarla** <a:yldz:781260109863059462> Sayaç Ayarlar.
  **» ${prefix}ban ** <a:yldz:781260109863059462> Etiketlenen Kullanıcıyı Banlar.
  **» ${prefix}kick ** <a:yldz:781260109863059462> Etiketlenen Kullanıcıyı Kickler.
  **» ${prefix}sa-as aç ** <a:yldz:781260109863059462> SA-AS Sistemini Açar.
  **» ${prefix}sa-as kapat ** <a:yldz:781260109863059462> SA-AS Sistemini Kapatır.
  **» ${prefix}emoji-ekle ** <a:yldz:781260109863059462> Emoji Ekler.
  **» ${prefix}çekiliş ** <a:yldz:781260109863059462> Çekiliş yaparsınız.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» Ares Bot Bağlantıları`, ` <a:yldz:781260109863059462> [Bot Davet Linki]() **|** [Destek Sunucusu](https://discord.gg/eK8AEYn5Nv) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** <a:yldz:781260109863059462>`)
        .setImage('https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif')       
 .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Moderasyon2'],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon2',
  description: 'a!davet-sistemi Menüsü',
  usage: 'moderasyon'
};