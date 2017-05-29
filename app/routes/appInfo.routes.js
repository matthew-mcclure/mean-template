const router = require('express').Router()
const appInfoController = require('../controllers/appinfo.controller')()

router.get('/:name', appInfoController.getHeaderInfo)

module.exports = router