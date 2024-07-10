/*const discord = require('discord.js');
const client = new discord.Client({ intents: [] });*/
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ 
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,] });

const token = process.env.DISCORD_TOKEN

client.login(token.toString()); // login the bot with your token.

const laMessages = {
  'mv': 'Je le trouve pas drôle',
  'steam deck': 'OUI ! ON SAIT {author} ! Le Steam De-gnagnagna !'
};

client.on('messageCreate', message => { // This is where we will handle all message events. Aka, the commands that will trigger the bot.
 
  for (let [key, value] of Object.entries(laMessages)) {
    let lsMessage = message.content.toLowerCase();
    if ( 
      lsMessage.includes(' ' + key + ' ') || 
      lsMessage.endsWith(' ' + key) || 
      lsMessage.startsWith(key + ' ') ||
      lsMessage == key
    )
    {
      value = value.replace('{author}', message.author.displayName.toUpperCase());
      message.channel.send(value);
    }
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