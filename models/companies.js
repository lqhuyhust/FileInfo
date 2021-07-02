const db = require('../config/database.js')

module.exports = {
    getAllCompanies: (callback) => {
        db.query(
            `select c.name, count(s.name) as number from company as c inner join software as s on c.id = s.company_id  group by c.id`,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            },
        )
    }
}