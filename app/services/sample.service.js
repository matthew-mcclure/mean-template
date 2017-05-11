const Sample = require('../models/sample')

module.exports = mongoServices

function mongoServices() {
    return {
        getAll,
        insertOne,
        updateOne,
        deleteOne
    }

    function getAll() {
        return Sample.find()
    }

    function insertOne(data) {
        let sample = new Sample(data)
        return sample.save()
    }

    function updateOne(queryCondition, data) {
        return Sample.findOneAndUpdate(queryCondition, data)
    }

    function deleteOne(queryCondition) {
        return Sample.deleteOne(queryCondition)
    }
}