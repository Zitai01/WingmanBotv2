const { Client, Intents } = require('discord.js')
require('dotenv').config()

const token = process.env.DISCORD_BOT_TOKEN
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

const guild = '229749241810124801'
const clientId = '893515753217720320'
client.on('ready', () => {
  console.log(`${client.user.tag}is ready`)
})
client.on('message', (message) => {
  if (message.author.bot) return
  if (message.content === 'hello') {
    message.channel.send('hello there')
  }
})
client.login(token)
