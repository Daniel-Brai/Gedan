// dependencies
const { validationResult } = require('express-validator')

// import models 
const User = require('../model/user')

// import email sender
const { sendEmail } = require('../utils/email')

// serve home page file
const getHome = (req, res) => { 
    res.status(200).render('index', {
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null; 
}

// serve privacy policy page
const getPrivacyPolicy = (req, res) => { 
    try {
        res.status(200).render('privacy_policy')
    } catch (error) {
        console.log(`An error occured -${error.message}`)
    }
}

// contact form handler
const formHandler = async (req, res) => { 

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone, 
        message: req.body.message
    });

    const errors = validationResult(req).array();

    if (errors) {
        req.session.errors = errors;
        req.session.success = false;
        res.status(308).redirect('/');
    } else {
        req.session.success = true;
        res.status(308).redirect('/');
    }
    console.log(errors)

    if (!errors) {
        // wait till user is validated before
        // saving the user to the database and
        // send an email to the user confirm he/she filled the form
        try {
            await user.save() 
            sendEmail(req.body.email)

            console.log('User saved to database successfully and email sent!')
        } catch (error) {
            // log error
            console.log(`An error occurred - ${error.message}}`)
        }
    }
}

module.exports = { getHome, getPrivacyPolicy, formHandler }