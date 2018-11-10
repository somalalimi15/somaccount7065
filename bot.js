const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("484103117374357534");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Benvenuti Òro Server .. ❦ ' ♪' **`), 2000)        
}
});

client.on('ready', () => {
    client.channels.find(c => c.id === '484118391578296330').join();
});

client.login(process.env.BOT_TOKEN)
