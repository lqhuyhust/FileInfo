const categories = require('../models/categories.js')

module.exports = (response) => ({
    handleGetCategory: (catId) => {
        categories.getCategory(catId, (err, result) => {
            console.log(catId);
            console.log(result);

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
                const data = {
                    id: result[0].id,
                    name: result[0].name,
                    description: result[0].description
                }
                response.end(
                    JSON.stringify({
                        status: 200,
                        success: true,
                        data,
                    }),
                )
            }
        })
    },
    handleGetAllCategories: () => {
        categories.getAllCategories((err, result) => {
            if (err) {
                response.end(
                    JSON.stringify({
                        status: 500,
                        success: false,
                        message: 'Internal server error',
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
    },
})
