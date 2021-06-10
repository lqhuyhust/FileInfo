const platforms = require('../models/platform')

module.exports = (response) => ({
    handleGetPlatformOfSoftware: (softId) => {
        platforms.getPlatformBySoftwareId(softId, (err, result) => {
            console.log(softId);
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
