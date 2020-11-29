const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const talkedRecently = new Set();
let botid = ('779686354317213717') 
exports.run = async(client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "a!";  
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ta2:781267604752171010> **Ares Bot Eğlence Menüsüne Hoşgeldiniz** <a:ta2:781267604752171010>`)
        .setDescription(`
        **${prefix}çıkma-teklif-et** <a:yldz:781260109863059462> Etiketlediğiniz Kişiye Çıkma Teklif Edersiniz.
        **${prefix}yumruk-at** <a:yldz:781260109863059462> Etiketlediğiniz Kişiye Yumruk Atarsınız.
        **${prefix}tersyazı** <a:yldz:781260109863059462> Yazdığınız Yazıyı Tersine Çevirir.
        **${prefix}sarıl** <a:yldz:781260109863059462> Etiketlediğiniz Kişiye Sarılırsınız.
        **${prefix}kralol** <a:yldz:781260109863059462> Kral Olursunuz.
        **${prefix}fbi** <a:yldz:781260109863059462> FBI Gif Atar
        **${prefix}espri** <a:yldz:781260109863059462> Rastgele Espri Atar.
        **${prefix}elyazısı** <a:yldz:781260109863059462> Yazdığınız Yazıyı El Yazısına Çevirir.
        **${prefix}doğrulukcesaret** <a:yldz:781260109863059462> Doğruluk Veya Cesaret Cümlesi Atar.
        **${prefix}banner** <a:yldz:781260109863059462> Yazdığınız YAZIYI Bannera Çevirir.
        **${prefix}aşkölçer** <a:yldz:781260109863059462> Etiketlediğiniz Kişiyle Aranızdaki Aşkı Ölçer.
        **${prefix}ys** <a:yldz:781260109863059462> Yıldız Savaşı Oynarsınız')
        **${prefix}bg** <a:yldz:781260109863059462> Bilek Güreşi Oynarsınız
        **${prefix}1vs1** <a:yldz:781260109863059462> Düello Oynarsınız
        **${prefix}azer-bülbül** <a:yldz:781260109863059462> Rastgele Azer Bülbül Fotoğrafı atarsınız
        **${prefix}token** <a:yldz:781260109863059462> Etiketlediğniz Kişinin Tokenini Alırsınız
        **${prefix}aduket-çek** <a:yldz:781260109863059462> Etiketlediğniz Kişiye Aduket Çekersiniz
        **${prefix}taksimdayı** <a:yldz:781260109863059462> Taksim Dayı Resmi Atarsınız
        **${prefix}efkarım** <a:yldz:781260109863059462> Efkarınızı Ölçersiniz
        **${prefix}kaç-cm** <a:yldz:781260109863059462> Malafatınızın Uzunluğunu Ölçersiniz
▬▬▬▬▬▬▬▬ \`\`\Genel Komutlar\`\`\ ▬▬▬▬▬▬▬▬

**»  ${prefix}davet __Botu Davet Edebilirsiniz!__**
**»  ${prefix}sunucutanıt __Sunucunuzu Tanıtabilirsiniz.__**
**»  ${prefix}istatistik __Yazarak Botun İstatistiklerini Göre Bilirsiniz.__**
**»  ${prefix}prefix __Yazarak Botun Prefixini Değiştirebilirsiniz.__**
**»  ${prefix}prefix-sıfırla __Yazarak Ayarladığınız Prefixi Sıfırlayabilirsiniz.__**

`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
                .addField(`» Ares Bot Bağlantıları`, ` 🔱 [Bot Davet Linki](https://bit.ly/393uvjH) **|** [Destek Sunucusu](https://discord.gg/eK8AEYn5Nv) **|** [Oy Linki](https://top.gg/bot/779686354317213717) **|** 🔱`)
        .setImage('https://cdn.discordapp.com/attachments/778415098997243914/780769370431422464/standard.gif')        
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Eğlence'],
  permLevel: 0,
};

exports.help = {
  name: 'eğlence',
  description: 'a!davet-sistemi Menüsü',
  usage: 'eğlence'
};