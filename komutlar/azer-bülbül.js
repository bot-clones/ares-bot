const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let replies = ["https://cdn.discordapp.com/attachments/781145277742317568/781175943581925426/9AOr5sR_400x400.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175950645002240/0cfba6836c92ee094e5e5fb356253169.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175952528638002/0x0-azer12.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175955963248650/38a3e94dfc6e6b300406b3d4e9fb9a2f.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175956496056380/220px-Azer_Bulbul.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175961194332170/30a37860360141.Y3JvcCwxMzg0LDEwODMsMjcwLDA.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175962482114580/ae.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175964968943626/az.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175971603546112/images.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175972161388584/42971.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781175987396149288/EXaj-geWAAA80Tb.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493684918419547/1.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493686075654194/2.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493690631716865/3.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493699728769024/4.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493700495933470/5.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493865098117170/11.png","https://cdn.discordapp.com/attachments/781145277742317568/781493878016311336/12.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493905879072798/crop.jpg","https://cdn.discordapp.com/attachments/781145277742317568/781493911473356810/indir.jpg"];

let result = Math.floor((Math.random() * replies.length));
  
let gifembed = new Discord.MessageEmbed()

.setTitle(" Azer Bülbül Wallpaper ")

.setColor("RANDOM")

.setFooter(`${message.author.tag} `, message.author.avatarURL)

.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['azer-bülbül','azer-bülbül','azer-bülbül','azer-bülbül'],

  permLevel: 0

};

exports.help = {

  name: 'azer-bülbül',

  description: 'Darknes Code',

  usage: 'azer-bülbül'

};