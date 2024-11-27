import nodemailer from 'nodemailer'
// currently use mailtrap for testing
// TODO: change to real email service like sendgrid
const sendEmail = (options) => {
    var transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'dangminh1312@gmail.com',
            pass: 'wbvk tofq hlgy gsdq',
        },
    })

    const mailOptions = {
        from: 'admin@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    transport.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

export default sendEmail
