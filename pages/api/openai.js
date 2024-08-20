import { OpenAI } from 'openai'
import * as dotenv from 'dotenv'
dotenv.config()
const openai =  new OpenAI({apiKey: process.env.OPENAI_API_KEY});
export default async function handler(req, res) {
    if (req.method === 'POST') {
    try {
    const {image} = req.body
    const response = await openai.chat.completions.create(
        {
         model: 'gpt-4o-mini',
         messages: [


            {
                role: 'system',
                content: [
                    {
                        type: 'text',
                        text: 'Identify what takes main space of this image and classify it like that in 1 word, nothing else.'
                    }
                ]
            },


            {role: 'user', content: [
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
    res.status(200).json(response.choices[0].message.content)
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }    
}
