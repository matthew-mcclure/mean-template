const sampleService = require('../services/sample.service')()
const ObjectId = require('mongodb').ObjectID
module.exports = sampleController

function sampleController() {
    return {
        getAll,
        insertOne,
        updateOne,
        deleteOne
    }

    function getAll(req, res) {
        sampleService.getAll()
            .then((response) => {
                res.json(response)
            })
            .catch(reason => {
                console.log(reason)
            })
    }

    function insertOne(req, res) {
        sampleService.insertOne(req.body)
            .then((response) => {
                res.json(response)
            })
            .catch(reason => {
                console.log(reason)
            })
    }

    function updateOne(req, res) {
        let queryCondition = {
            _id: ObjectId(req.params.id)
        }
        sampleService.updateOne(queryCondition, req.body)
            .then((response) => {
                res.json(response)
            })
            .catch((response) => {
                console.log(response)
            })
    }

    function deleteOne(req, res) {
        let queryCondition = {
            _id: ObjectId(req.params.id)
        }
        sampleService.deleteOne(queryCondition)
            .then((response) => {
                res.json(response)
            })
            .catch((response) => {
                console.log(response)
            })
    }

}