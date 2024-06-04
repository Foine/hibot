/*const discord = require('discord.js');
const client = new discord.Client({ intents: [] });*/
const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });
const token = fs.readFileSync("token.txt")

client.login(token.toString()); // login the bot with your token.

client.on('messageCreate', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
 
    if ( message.content.toLowerCase().includes('mv') )
    {
        message.channel.send('Je le trouve pas drôle');
    }
 
});