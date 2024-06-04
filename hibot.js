/*const discord = require('discord.js');
const client = new discord.Client({ intents: [] });*/
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });

const token = process.env.DISCORD_TOKEN

client.login(token.toString()); // login the bot with your token.

client.on('messageCreate', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
 
    if ( message.content.toLowerCase().includes('mv') )
    {
        message.channel.send('Je le trouve pas drôle');
    }
 
});



const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})