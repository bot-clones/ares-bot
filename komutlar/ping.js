const Discord = require('discord.js');

const db = require('quick.db');

exports.run = async (app, message, client) => {

  if(message.author.id !== '601799934471307268') if(message.author.id !== '601799934471307268')
    
      return;

  const embed2 = new Discord.MessageEmbed()

  .setDescription('**Botun pingi hesaplanıyor...**')

   let start = Date.now(); 

   let mesaj = await message.channel.send(embed2)

    let diff = (Date.now() - start); 

    let API = (app.ws.ping).toFixed(2)

    

    setInterval(() => {

        

        const embed = new Discord.MessageEmbed()

        .setDescription(`**Ares**\nMesaj gecikme süresi; **${diff}ms** \n\n **Ares**\nBot gecikme süresi; **${API}ms**`)

        mesaj.edit(embed);

      

    }, 5000)

  

  

  

  

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'ping',

  description: 'İstediğiniz şeyi bota yazdırır.',

  usage: 'yaz [yazdırmak istediğiniz şey]'

};