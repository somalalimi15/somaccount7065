const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("507935307543347203");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**- Welcome To ,Paranoia .. **`), 2000)        
}
});

client.on('ready', () => {
    client.channels.find(c => c.id === '507935307543347207').join();
});

client.login(process.env.BOT_TOKEN)
