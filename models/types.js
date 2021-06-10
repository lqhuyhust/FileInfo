const db = require('../config/database.js')

module.exports = {
    getTypesByCategory: (catId, callback) => {
        db.query(`select f.id, f.name as file_name, t.name as type_name, t.star from file as f inner join file_type as t on f.id = t.file_id where t.cat_id = ${catId} `,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            })
    },
    getTypesByAlphabet: (x, callback) => {
        db.query(`select f.id, f.name as file_name, t.name as type_name, t.star from file as f inner join file_type as t on f.id = t.file_id where f.name like '.${x}%' `,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            })
    },
    getTypesBySpecial: (callback) => {
        db.query(`select f.id, f.name as file_name, t.name as type_name, t.star from file as f inner join file_type as t on f.id = t.file_id where substring(f.name, 2, 1) not between like 'A' and 'B' `,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            })
    },
    getTypesByFile: (fileId, callback) => {
        db.query(`select * from file_type where file_id = ${fileId}`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            })
    },
    

}