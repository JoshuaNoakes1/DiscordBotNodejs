module.exports = (client, member) => {
client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to The ironWolf and Virtually Discord Server!, ${member}, Please Read The Rules In Our Rules Channel!`)
});}