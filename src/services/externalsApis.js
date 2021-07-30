import axios from 'axios'

export default {
    sendgrid () {
        return axios.create({
            baseURL: 'https://api.sendgrid.com/v3/mail',
            headers: {
                'Authorization': 'Bearer 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',
                'Content-Type': 'application/json' 
            }
        })
    }
}