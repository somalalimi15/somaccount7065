const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("507935307543347203");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**- Welcome To ,Paranoia .. **`), 2000)        
}
});
bot.login(process.env.BOT_TOKEN)
