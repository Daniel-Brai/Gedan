// serve home page file
const getHome = (req, res) => { 
    res.status(200).render('index') 
}

module.exports = { getHome }