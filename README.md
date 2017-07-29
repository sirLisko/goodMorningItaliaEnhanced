Good Morning Italia - Enanched
============

(Experimental) enhanced version of this amazing mailing list (http://goodmorningitalia.it).

##### Powered by:
* [Node.js](https://nodejs.org) to run the service.
* [Horseman.js](http://www.horsemanjs.org/) to render the website and get the data (powered by [Phantom.js](http://phantomjs.org/)).
* [Nodemailer](https://nodemailer.com) to send emails via Node.
* [Mailgun](https://mailgun.com) email service.

##### Set up
* You need a valid Good Morning Italia accoung, you can get one [here](http://www.goodmorningitalia.it/abbonati/).
* A mailgun account in order to send emails.

If you have both of them go to `config.js` and fill it up the missing informations.

##### Note
An alternative version of `getNews` using [Nightmare.js](http://www.nightmarejs.org/) (powered by [Electron](https://electron.atom.io/)) is available in the [electron branch](https://github.com/sirLisko/goodMorningItaliaEnhanced/tree/electron).
