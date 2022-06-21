// dependencies
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const emailHTML = () => { 
   return `<!DOCTYPE html><html lang="en" style="padding:0;margin:0;width:100%;font-amily: Arial,sans-serif;-webkit-text-size-adjust:100%;">
    <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"></head>
    <body>div</body></html>` 
}

const email = () => {
    return {
        to: req.body.email,
        from: process.env.SENDER_MAIL,
        subject: 'GEDAN GLOBAL OPTIONS LIMITED EMAIL ACKNOWLEGMENT',
        text: `Good Day, ${req.body.name}! Thanks for contacting us`,
        html: emailHTML
    }
}
    
const sendEmail = async() => {
    try {
        await sendgrid.send(email())
        res.status(200).json({'Message': 'Email sent succesfully!'})
    } catch (error) {
        res.status(200).json({'Message': `An error occured when try to send the email - ${error.message}`})
    }
}

module.exports = { sendEmail }