const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const ms = require('parse-ms')
exports.run = async(client, message, args) => {
const DBL = require('dblapi.js')
const dbl = new DBL("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NjQ1ODQ2MjE4NzYxODMxNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjAxNzE5MDcwfQ.qGCyxz9i1YH_O3Td5XcXgpU3OzPIbVRtyVMLjZvEyDQ", client)
dbl.hasVoted(message.author.id).then(async voted => {
if(voted) {  

let saat = 43200000 //12 saat girdim ben. Milisaniye cinsinden istediğiniz süreyi girebilirsiniz.
let süre = db.fetch(`csunucutanıt_${message.guild.id}`)

if(süre !== null && saat - (Date.now() - süre) > 0) {

let c = ms(saat - (Date.now() - süre))
const emmbed1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❌ Sunucunu zaten tanıtmışsın! Lütfen **${c.hours}** saat **${c.minutes}** dakika bekle.`)
message.channel.send(emmbed1)   
} else {
  
  const emmbed3 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❌ Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(emmbed3) 

  
let kanal = client.channels.cache.get("7779809356085854209") //sunucutanıt mesajları hangi kanala gidecekse idsini yazmalısın

    message.channel.createInvite({maxAge: 0}).then(i => {
let embed = new Discord.MessageEmbed()
.setFooter(`Ares Sunucu Tanıt Sistemi`)
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setColor("RANDOM")
.setDescription(`**${message.guild.name}** sunucusu tanıtıldı! Bilgiler;

**Kurucu:** \`${message.guild.owner.user.tag}\` 
**Tanıtan:** \`${message.author.tag}\`
**Sunucu linki:** https://discord.gg/${i.code}
`)
db.set(`csunucutanıt_${message.guild.id}`, Date.now())
kanal.send(embed)
const emmbed2 = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`🎊 Sunucun başarıyla [burada](https://discord.gg/eK8AEYn5Nv) tanıtıldı! 12 saat sonra tekrar tanıtabilirsin.`)
message.channel.send(emmbed2)  
})  
}
} else {
	const emmbed4 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`❌ Bu komutu kullanabilmek için Discord Bot List üzerinden **Ares** botumuza oy vermen gerekiyor.
**Ares Bot**'a oy vermek için [BURAYA](https://top.gg/bot/779686354317213717) tıkla!`)
message.channel.send(emmbed4) 
}  
})

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sunucutanit", "Sunucutanit", "sunucu-tanıt", "sunucu-tanit"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sunucutanıt',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
 