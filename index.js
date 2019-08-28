const fs = require('fs')
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const PREFEX = '#';
fs.readdir('./events/', (err, files) => {
    files.forEach(file => {
      const eventHandler = require(`./events/${file}`)
      const eventName = file.split('.')[0]
      client.on(eventName, (...args) => eventHandler(client, ...args))
    })
  })

  client.on('ready', () => {
    console.log('This Bot is Online!');
    client.user.setActivity('Minecraft - Creative Mode!').catch(console.error);
})

client.on('guildMemberAdd', member =>{
        const channel = member.guild.channels.find(channel => channel.name === "welcome");
        if(!channel) return;

        channel.send(`Welcome to The ironWolf and Virtually Discord Server!, ${member}, Please Read The Rules In Our Rules Channel!`)
});
client.on('message', message => {
    if (message.content.startsWith('!kick')) {
      const member = message.mentions.members.first()
  
      if (!member) {
        return message.reply(
          `Who are you trying to kick? You must mention a user.`
        )
      }
  
      if (!member.kickable) {
        return message.reply(`I can't kick this user. Sorry!`)
      }
  
      return member
        .kick()
        .then(() => message.reply(`${member.user.tag} was kicked.`))
        .catch(error => message.reply(`Sorry, an error occured.`))
    }
  })
client.on('message', Message=>{

    let args = Message.content.substring(PREFEX.length).split(" ");

    switch(args[0]){
        case 'ping':
            if(!Message.member.roles.find(r => r.name === "Owners")) return Message.channel.send('Your Dont have Permissions To Use That Command!')
        Message.channel.sendMessage('pong!');
         break;
         case 'Website':
         Message.channel.sendMessage('Youtube.com/c/ironwolf23')
         break;
         case 'info':
            if(args[1] === 'version'){
                Message.channel.sendMessage('Version 1.0.2');
            }else{
                Message.channel.sendMessage('That Dosent Seem Right, Try Again!')
                }   
                break;
             case 'clear':
                        if(!args[1]) return Message.reply('Error, Missing Second Option')
                        Message.channel.bulkDelete(args[1]); Message.reply('Removed ' + (args[1]))
                        break;
                        }
                        }     
            ,);
client.login(process.env.BT)
