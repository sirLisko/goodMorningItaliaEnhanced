import nodemailer from 'nodemailer'
import mailGun from 'nodemailer-mailgun-transport'
import { mailgun } from './../config'

var nodemailerMailgun = nodemailer.createTransport(mailGun(mailgun))

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

export default sendMail
