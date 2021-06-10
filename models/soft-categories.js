const db = require('../config/database.js')

module.exports = {
    getAllSoftCategories: (callback) => {
        db.query('select * from soft_category', (error, result) => {
            if (!error) {
                callback(0, result)
            } else callback(error)
        })
    },
    getSoftCategory: (catId, callback) => {
        db.query(
            `select * from soft_category where id = ${catId}`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            },
        )
    }
}