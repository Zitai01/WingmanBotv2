const { Client, Intents } = require('discord.js')
require('dotenv').config()
const { Msg } = require('../models')
const controller = require('../controllers/DatabaseController')
const token = process.env.DISCORD_BOT_TOKEN
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
  console.log(`${client.user.tag}is ready`)
})
client.on('message', async (message) => {
  async function getreq() {
    let req = await Msg.findByPk(2)
    let reqmsg = req.message
    console.log(reqmsg)
    return reqmsg
  }
  let repyto = await getreq()
  console.log(repyto)
  if (message.author.bot) return
  if (message.content.toLowerCase() === repyto) {
    async function getmsg() {
      let msg = await Msg.findByPk(1)
      let message = msg.message
      return message
    }
    let messages = await getmsg()

    message.channel.send(messages)
  }
})
client.login(token)
