import Horseman from 'node-horseman'
import cheerio from 'cheerio'

const horseman = new Horseman()

function parseContent (content) {
  const $ = cheerio.load(content)
  $('.really_simple_share').remove()

  return $.html()
}

function getNews (credentials) {
  return horseman
    .open('http://www.goodmorningitalia.it/')
    .click('[href="#accedi"]')
    .wait(1000)
    .type('#form_login [type="email"]', credentials.email)
    .type('#form_login [type="password"]', credentials.password)
    .click('#form_login [type="submit"]')
    .waitForSelector('.entry-content')
    .html('.entry-content')
    .close()
    .then(parseContent)
}

export default getNews
