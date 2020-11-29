const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
exports.run = async(client, message, args) => {

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ta2:781267604752171010> **Ares Bot  Ekonomi Menüsüne Hoşgeldiniz** <a:ta2:781267604752171010>`)
        .setDescription(`

  **» ${prefix}soygun** <a:yldz:781260109863059462> Soygun yaparsınız.
  **» ${prefix}profil** <a:yldz:781260109863059462> Profil bilgilerinizi gösterir.
  **» ${prefix}altın-yolla** <a:yldz:781260109863059462> İstediğiniz kişiye altın yollayabilirsiniz.
  **» ${prefix}altınal** <a:yldz:781260109863059462> Paranızla altın alıp marketten eşya satın alabilirsiniz.
  **» ${prefix}elmasal** <a:yldz:781260109863059462> Altınınızla elmas alıp marketten eşya satın alabilirsiniz.
  **» ${prefix}elmas-yolla** <a:yldz:781260109863059462> İstediğiniz kişiye elmas yollayabilirsiniz.
  **» ${prefix}günlük** <a:yldz:781260109863059462> Günlük maaşınızı verir.
  **» ${prefix}market** <a:yldz:781260109863059462> Eşya satın alabilirsiniz gösterir.
  **» ${prefix}meslek** <a:yldz:781260109863059462> Meslek sahibi olarak daha hızlı para kazanabilirsiniz
  **» ${prefix}para-yolla** <a:yldz:781260109863059462> İstediğiniz kişiye para yollayabilirsiniz.
  **» ${prefix}soygun** <a:yldz:781260109863059462> Etiketlediğiniz Kişiden Para Çalarsınız.
  **» ${prefix}kazı-kazan** <a:yldz:781260109863059462> Kazı kazan oynarsınız.
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
       
            .addField(`» Ares Bot Bağlantıları`, ` ✨ [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=781106294353952798&scope=bot&permissions=2147483647) **|** [Destek Sunucusu](https://discord.gg/FQVadvq) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** ✨`)
        .setImage('https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif')        
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekonomi'],
  permLevel: 0,
};

exports.help = {
  name: 'ekonomi',
  description: 'a!davet-sistemi Menüsü',
  usage: 'oyun'
};