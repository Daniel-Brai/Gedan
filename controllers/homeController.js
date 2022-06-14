// serve home page file
const getHome = (req, res) => { 
    res.status(200).render('index', {
        success: req.session.success,
        errors: req.session.errors
    });
    req.session.errors = null; 
}

module.exports = { getHome }