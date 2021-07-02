const types = require('../models/types');

module.exports = (response) => ({
    handleGetAllTypes: (catId) => {
        types.getAllTypes((err, result) => {
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
    handleGetTypesByCategory: (catId) => {
        types.getTypesByCategory(catId, (err, result) => {
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
    handleGetTypesBySoftware: (softId) => {
        types.getTypesBySoftware(softId, (err, result) => {
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
        types.getTypesBySpecial((err, result) => {
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
    handleAllFiles: () => {
        types.getAllFiles((err, result) => {
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
