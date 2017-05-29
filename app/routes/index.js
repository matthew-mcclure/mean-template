const router = require('express').Router()
const path = require('path')

module.exports = router

router.use('api/appInfo', require('./appInfo.routes'))
router.use('/api/sample', require('./sample.routes'))

router.use(require('./sites.routes'))


// will serve html files by slug
router.use('/:slug', (req, res) => {
    //res.sendFile(`../${__dirname}/public/views/${req.params.slug}.html`)
    res.sendFile(`client/public/modules/${req.params.slug}/views/${req.params.slug}.html`, {
        root: path.join(__dirname, '../..')
    })
})