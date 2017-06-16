var nodemailer = require('nodemailer')
var mailGun = require('nodemailer-mailgun-transport')
var mailGunConfig = require('./../config').mailgun

var nodemailerMailgun = nodemailer.createTransport(mailGun(mailGunConfig))

function sendMail (address, subject, content) {
  nodemailerMailgun.sendMail({
    from: address,
    to: address,
    subject: subject,
    html: content
  }, (err, info) => {
    err
      ? console.error('Error: ' + err)
      : console.log(`${address} - ${info.message}`)
  })
}

module.exports = sendMail
