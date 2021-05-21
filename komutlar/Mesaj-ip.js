const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const ip = new Discord.MessageEmbed()
    .addField(["\<a:mc:842452205592117309> mc.storikanw.net  \<a:mc:842452205592117309>","\<a:mc:842452205592117309> oyna.storikanw.net \<a:mc:842452205592117309>"],"\<a:mc:842452205592117309> **play.storikanw.net** \<a:mc:842452205592117309>")
    .setColor("BLUE")
    return message.channel.send(ip);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ip',
  description: 'Çekiliş yapar.',
  usage: 'çekilişyap'
};