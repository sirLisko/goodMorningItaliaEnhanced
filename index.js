import moment from 'moment'

import getNews from './modules/getNews'
import mail from './modules/mail'

import { goodMorningItalia } from './config'

function sendMail (content) {
  mail(
    goodMorningItalia.email,
    `Good Morning Italia - ${moment().format('L')}`,
    content
  )
}

getNews(goodMorningItalia)
  .then(sendMail)
  .catch(error => console.error('Failed:', error))
