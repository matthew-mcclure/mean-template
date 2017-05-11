const router = require('express').Router()
const sampleController = require('../controllers/sample.controller')()

router.get('/', sampleController.getAll)
router.post('/', sampleController.insertOne)
router.put('/:id', sampleController.updateOne)
router.delete('/:id', sampleController.deleteOne)


module.exports = router