const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(cclient, message, args) => {

if(message.author.id !== "601799934471307268") if(message.author.id !== "601799934471307268") return message.channel.send("❌ Bu komutu sadece sahiplerim kullanabilir.")

let cuser = message.mentions.users.first() || cclient.users.cache.get(args[0])
if(!cuser) return message.channel.send("❌Bir kullanıcı belirtmelisin!")

message.channel.send("✅**"+cuser.tag+"** kullanıcısı başarıyla karalisteden çıkarıldı.")
const westra = new Discord.MessageEmbed()
.setColor(`GREEN`)
.setTimestamp()
.setDescription(`<a:onayke:763316512051691520> **${cuser.tag}** kullanıcısı karalisteden çıkarıldı.`)
  cclient.channels.cache.get("781145277742317568").send(westra)
db.delete(`ckaraliste.${cuser.id}`)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'beyazliste',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
