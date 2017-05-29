const path = require('path')

module.exports = {
    /*admin: (req, res, next) => {
        res.sendFile('client/admin/index.html', {
            root: path.join(__dirname, '../..')
        })
    },*/
    public: (req, res, next) => {
        res.sendFile(`client/public/index.html`, {
            root: path.join(__dirname, '../..')
        })
    },
    htmlFiles: (req, res, next) => {
        let slug = req.params.slug.replace('.html', '')
        res.sendFile(`client/public/html-views/${slug}.html`, {
            root: path.join(__dirname, '../..')
        })
    }
}
