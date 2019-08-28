module.exports = client => {
client.on('ready', () => {
    console.log('This Bot is Online!');
    client.user.setActivity('Minecraft - Creative Mode!').catch(console.error);
})}