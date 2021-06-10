const db = require('../config/database.js')

module.exports = {
    getAllSoftwares: (callback) => {
        db.query('select * from software', (error, result) => {
            if (!error) {
                callback(0, result)
            } else callback(error)
        })
    },
    getSoftwareById: (softId, callback) => {
        db.query(
            `select c.name as company_name, s.* from software as s inner join company as c on s.company_id = c.id where s.id = ${softId}`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            },
        )
    },
    getSoftwareByCompany: (comId, callback) => {
        db.query(
            `select c.name, s.* from software as s inner join company as c on s.company_id = c.id where c.id = ${comId}`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            },
        )
    },
    getSoftwareByCategory: (catId, callback) => {
        db.query(
            `select * from software where cat_id = ${catId}`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            },
        )
    }
}