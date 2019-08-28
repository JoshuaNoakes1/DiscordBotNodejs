module.exports = (client, Commands) => {
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
            ,)}