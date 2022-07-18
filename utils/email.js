// dependencies
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { config } = require('dotenv')

// read env variables
config({path: './.env'})

const emailHTML = () => { 
    return `<!DOCTYPE html><html lang="en" style="padding:0;margin:0;width:100%;font-family: Arial,sans-serif;-webkit-text-size-adjust:100%;"><head><meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body><p>Hi there! Thank you for reaching out to us. We greatly appreciated your message and will look into it.</p>
    <p><strong>NOTE: </strong>This is an automated email. It does not answer your emails to GEDAN GLOBAL OPTIONS LIMITED</p></body></html>` 
}

const sendEmail = async(email) => { 

    const OAuth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REDIRECT_URI,
    );

    OAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    try {
        // Generate the accessToken on the fly
        const accessToken = await OAuth2Client.getAccessToken();

        // Create the email envelope (transport)
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.CLIENT_EMAIL,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        });
    
        // Create the email options and body 
        const mailOptions = {
            from: `From GEDAN GLOBAL OPTIONS LTD<${process.env.CLIENT_EMAIL}>`,
            to: email,
            subject: `Thank you reaching out to Gedan Global Options Ltd!`,
            html: emailHTML(),
        }    

        // Set up the email options and delivering it
        const result = await transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        console.log(`An occured while sending email - ${error.message}`);
    }
}

module.exports = { sendEmail }
