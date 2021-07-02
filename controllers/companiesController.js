const platforms = require('../models/companies')

module.exports = (response) => ({
    handleGetAllCompanies: () => {
        platforms.getAllCompanies((err, result) => {
            if (err) {
                response.end(
                    JSON.stringify({
                        status: 500,
                        success: false,
                        message: 'Internal server error',
                    }),
                )
            } else if (result === false) {
                response.end(
                    JSON.stringify({
                        status: 201,
                        success: false,
                        message: 'No such category exists',
                    }),
                )
            } else {
                response.end(
                    JSON.stringify({
                        status: 200,
                        success: true,
                        data: result,
                    }),
                )
            }
        })
    }
})
