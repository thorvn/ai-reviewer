import { openai } from '@ai-sdk/openai'

import { SYSTEM_PROMT, user_prompt } from '../src/promts.js'
import { getDiffData } from '../src/utils.js'

const messages = [
  {
    role: 'system',
    content: SYSTEM_PROMT
  },
  {
    role: 'user',
    content: [
      {
        type: 'text',
        text: getDiffData()
      }
    ]
  }
]

const params = {
  model: openai('gpt-3.5-turbo'),
  messages: messages
}

export { params }
