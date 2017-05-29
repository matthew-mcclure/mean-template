const AppInfo = require('../models/appinfo')

module.export = appInfoServices

function appInfoServices() {
    return {
        getHeaderInfo
    }

    function getHeaderInfo(queryCondition) {
        return AppInfo.find(queryCondition).limit(1)
    }
}