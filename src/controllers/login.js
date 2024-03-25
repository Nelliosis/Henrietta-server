import axios from 'axios'
import dotenv from 'dotenv'
import querystring from 'querystring'

dotenv.config()

const { HENRIETTA_CLIENT_ID, HENRIETTA_CLIENT_SECRET } = process.env

export const login = async (req, res) => {
    const code = req.query.code

    const scopes = ['identify', 'guilds']

    if (code) {
        try {
            const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', querystring.stringify({
                client_id: HENRIETTA_CLIENT_ID,
                client_secret: HENRIETTA_CLIENT_SECRET,
                grant_type: 'authorization_code',
                code,
                redirect_uri: 'http://localhost:3000/login',
                scope: scopes.join(' ')
            }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })

            const token = await tokenResponse.data
            console.log(token)
            res.send(token).status(200)
        } catch (error) {
            // TODO: Add error log
            console.error('Error logging in:', error)
            res.status(error.response ? error.response.status : 500).send(error.message)
        }
    } else {
        res.status(400).send('Authorization code not provided')
    }

}