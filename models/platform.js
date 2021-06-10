const db = require('../config/database.js')

module.exports = {
    getPlatformBySoftwareId: (softId, callback) => {
        db.query(
            `select p.* from platform as p inner join platform_of_software as ps on p.id = ps.platform_id  where ps.software_id = ${softId}`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            },
        )
    }
}