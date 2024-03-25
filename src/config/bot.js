import { Client, IntentsBitField } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const { BOT_TOKEN } = process.env;

const myIntents = new IntentsBitField();
myIntents.add(
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildVoiceStates,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.DirectMessages,

)
const client = new Client({ intents: [myIntents], });

client.once('ready', () => {
    console.log('Connected to Discord');
});

// Login to Discord with your app's token
client.login(BOT_TOKEN);

export { client }