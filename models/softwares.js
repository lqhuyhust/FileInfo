const db = require('../config/database.js')

module.exports = {
    getAllSoftwares: (callback) => {
        db.query('select id, name from software', (error, result) => {
            if (!error) {
                callback(0, result)
            } else callback(error)
        })
    },
    getSoftwareById: (softId, callback) => {
        db.query(
            `select c.name as company_name, sc.name as cat_name, f.id as primary_file_id, f.name as primary_file_name, ft.name as primary_type_name, s.* 
            from software as s inner join company as c on s.company_id = c.id inner join soft_category as sc on s.cat_id = sc.id 
            inner join file_type as ft on s.primary_type_id = ft.id inner join file as f on ft.file_id = f.id where s.id = ${softId}`,
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
    },
    getSoftwaresByAlphabet: (x, callback) => {
        db.query(`select id, name, star from software where name like '${x}%' `,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            })
    },
    getSoftwaresBySpecial: (callback) => {
        db.query(`select id, name, star from software where upper(substring(name, 1, 1)) not between 'A' and 'Z' `,
            (error, result) => {
                if (!error) {
                    callback(0, result)
                } else callback(error)
            })
    },
}