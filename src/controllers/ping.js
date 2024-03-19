import { client } from '../config/bot.js'

export const ping = async (req, res) => {
    const { channelID, message } = req.body

    const channel = await client.channels.fetch(channelID)
    if (channel) {
        channel.send(message)
        res.send('Success').status(200)
    }
    else {
        res.send('Channel not found').status(404)
    }
} 