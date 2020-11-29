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
       .setTitle(` <a:ta2:781267604752171010>**Ares  Kullanıcı Menüsüne Hoşgeldiniz** <a:ta2:781267604752171010>`)
        .setDescription(`
  **» ${prefix}avatar <a:yldz:781260109863059462> Avatarınızı Atar.
  **» ${prefix}sunucutanıt** <a:yldz:781260109863059462> Sunucunuzu Tanıtır.
  **» ${prefix}kullanıcı-bilgi** <a:yldz:781260109863059462> Etiketlediğiniz Kişinin Kullanıcı Bilgisini Gösterir.
  **» ${prefix}kanalbilgi ** <a:yldz:781260109863059462> Belirtilen Kanal Hakkında Bilgi Verir.
  **» ${prefix}davet** <a:yldz:781260109863059462> Botu Davet Edersiniz!
  **» ${prefix}korona ** <a:yldz:781260109863059462> Korona Hakkında Bilgi Alırsınız.
  **» ${prefix}id ** <a:yldz:781260109863059462> Etiketlediğiniz Kişini İD sini atar.
  **» ${prefix}mcskin ** <a:yldz:781260109863059462> İsmini Girdiğiniz Skini Fotosunu Atar.
  **» ${prefix}emoji-bilgi** <a:yldz:781260109863059462> İsmini Yazdığınız Emoji Hakkında Bilgi Alırsınız.
  **» ${prefix}saat ** <a:yldz:781260109863059462> Saati Gösterir.(Kendinde Bakabilirsin Ama)
  **» ${prefix}say** <a:yldz:781260109863059462> Sunucuda ki Üye Durumlarını Gösterir.
  **» ${prefix}sunucu-bilgi** <a:yldz:781260109863059462> Sunucu Hakkın da Bilgi Verir.
  **» ${prefix}sunucu-resim** <a:yldz:781260109863059462> Sunucunun İconunu Atar.
  **» ${prefix}yetkilerim** <a:yldz:781260109863059462> Sunucuda ki Yetkilerinizi Gösterir.
  **» ${prefix}azer-bülbül** <a:yldz:781260109863059462> Rastgele Azer Bülbül Fotoğrafı Atarsınız.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
               .addField(`» Ares Bot Bağlantıları`, ` ✨[Bot Davet Linki](https://bit.ly/393uvjH) **|** [Destek Sunucusu](https://discord.gg/eK8AEYn5Nv) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** ✨`)
          .setImage('https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif')
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: 'a!davet-sistemi Menüsü',
  usage: 'kullanıcı'
};