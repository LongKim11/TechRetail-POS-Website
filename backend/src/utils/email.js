import nodemailer from 'nodemailer'
// currently use mailtrap for testing
// TODO: change to real email service like sendgrid
const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '2185b3a91d76a8',
            pass: '35ede7cb08d775',
        },
    })

    const mailOptions = {
        from: 'admin@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

export default sendEmail
