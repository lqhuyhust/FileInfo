const db = require('../config/database.js')

module.exports = {
    getAllCategories: (callback) => {
        db.query('select * from category', (error, result) => {
            if (!error) {
                callback(0, result)
            } else callback(error)
        })
    },
    getCategory: (catId, callback) => {
        db.query(
            `select * from category where id = ${catId}`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            },
        )
    }
}