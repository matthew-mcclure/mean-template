const router = require('express').Router()
const sitesController = require('../controllers/sites.controller')

// frontend routes =========================================================
// route to handle all angular requests
// router.get('/admin', cache.middleware('2 hours'), sitesController.admin)
router.get('/public/:slug', sitesController.htmlFiles)
router.get('/*', sitesController.public)

module.exports = router