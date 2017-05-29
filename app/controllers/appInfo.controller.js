const appInfoService = require('../services/appInfo.service')
const ObjectId = require('mongodb').ObjectID
module.exports = appInfoController

function appInfoController() {
    return {
        getHeaderInfo
    }

    function getHeaderInfo(req, res) {
        let query = {
            name: req.params.name
        }
        appInfoService.getHeaderInfo(query)
            .then((response) => {
                res.json(response)
            })
            .catch((response) => {
                console.log(reason)
            })
    }
}