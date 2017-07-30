Good Morning Italia - Enanched
============

(Experimental) enhanced version of this amazing mailing list (http://goodmorningitalia.it).

##### Powered by:
* [Node.js](https://nodejs.org) to run the service.
* [Nightmare.js](http://www.nightmarejs.org/) to render the website and get the data (powered by [Electron](https://electron.atom.io/)).
* [Nodemailer](https://nodemailer.com) to send emails via Node.
* [Mailgun](https://mailgun.com) email service.

##### Set up
* You need a valid Good Morning Italia accoung, you can get one [here](http://www.goodmorningitalia.it/abbonati/).
* A mailgun account in order to send emails.

If you have both of them go to `config.js` and fill it up the missing informations.

##### Note
An alternative version of `getNews` using [Horseman.js](www.horsemanjs.org) (powered by [Phantom.js](phantomjs.org)) is available in the [phantomjs branch](https://github.com/sirLisko/goodMorningItaliaEnhanced/tree/phantomjs).
