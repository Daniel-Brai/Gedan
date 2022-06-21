// serve gallery page and subdirectories
const getGallery = (req, res) => {
    try {
        res.status(200).render('gallery')
    } catch (error) {
        res.redirect('/')
        console.log(`Something went wrong - ${error.message}. Try again!`)
    }
}

// serve gallery upload page 
const getGalleryUpload = (req, res) => {
    try {
        res.status(200).render('upload');
    } catch (error) {
        res.redirect('/')
        console.log(`Something went wrong - ${error.message}. Try again!`)
    }
}

// get gallery register page
const getGalleryRegister = (req, res) => {
    try {
        res.status(200).render('register')
    } catch (error) {
        res.redirect('/')
        console.log(`Something went wrong - ${error.message}. Try again!`)
    }
}

// get gallery login page
const getGalleryLogin = (req, res) => {
    try {
        res.status(200).render('login')
    } catch (error) {
        res.redirect('/')
        console.log(`Something went wrong - ${error.message}. Try again!`)
    }
}

module.exports = { getGallery, getGalleryUpload, getGalleryRegister, getGalleryLogin }