import { OpenAI } from 'openai'
import * as dotenv from 'dotenv'
dotenv.config()
//Classify this image in 1 word as a category, nothing else.
const openai =  new OpenAI({apiKey: process.env.OPENAI_API_KEY});
export default async function handler(req, res) {
    const {image} = req.body
    const response = await openai.chat.completions.create(
        {model: 'gpt-4o-mini',
         messages: [
            {role: 'user', content: [
                {
                    type: 'text',
                    text: "Describe image"
                },
                {
                    type: 'image_url',
                    image_url: {
                        url: `${image}`
                    }
                }
            ]},
    
            ]
    
        }
    )
    console.log(response.choices[0].message)
    res.status(200).json(response)
}
