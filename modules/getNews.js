const Nightmare = require('nightmare')()
const cheerio = require('cheerio')

function parseContent (content) {
  const $ = cheerio.load(content)
  $('.really_simple_share').remove()

  return $.html()
}

function getNews (credentials) {
  return Nightmare
    .goto('http://www.goodmorningitalia.it/')
    .click('[href="#accedi"]')
    .wait(1000)
    .type('#form_login [type="email"]', credentials.email)
    .type('#form_login [type="password"]', credentials.password)
    .click('#form_login [type="submit"]')
    .wait('.entry-content')
    .evaluate(() => document.querySelector('.entry-content').innerHTML)
    .end()
    .then(parseContent)
}

module.exports = getNews
