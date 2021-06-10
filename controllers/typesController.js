const types = require('../models/types');

module.exports = (response) => ({
    handleGetTypesByCategory: (catId) => {
        types.getTypesByCategory(catId, (err, result) => {
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
    handleGetTypesByAlphabet: (x) => {
        types.getTypesByAlphabet(x, (err, result) => {
            console.log(x);
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
    handleGetTypesBySpecial: () => {
        types.getTypesByAlphabet((err, result) => {
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
    handleGetTypesByFile: (fileId) => {
        types.getTypesByFile(fileId, (err, result) => {
            console.log(fileId);
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
