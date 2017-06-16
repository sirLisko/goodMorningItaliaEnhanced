var moment = require('moment')

var getNews = require('./modules/getNews')
var mail = require('./modules/mail')

var gmi = require('./config').goodMorningItalia

function sendMail (content) {
  mail(
    gmi.email,
    `Good Morning Italia - ${moment().format('L')}`,
    content
  )
}

getNews(gmi)
  .then(sendMail)
  .catch(error => console.error('Failed:', error))
