// serve gallery page and subdirectories
const getGallery = (req, res) => {
    res.status(200).render('gallery')
}

module.exports = { getGallery }