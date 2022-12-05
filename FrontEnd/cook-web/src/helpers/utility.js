const axios = require('axios');
// const https = require('https');
// const fs = require('fs');
const errorCode = require('./GeneralMessage.js')
const constant = require('./GeneralConstant.js')

const callService = (requestBody) => {
    
    // create config object
    const setConfig = (requestObject) => {

        if(requestObject.token !== undefined) {
            requestObject.headers = { Authorization: `Bearer ${requestObject.token}` }
        }

        return requestObject;
    } 

    const responseHandler = response => {
        var res = {
            statusCode : response.status,
            data : response.data
        }
        return res
    };
    
    const errorHandler = error => {

        var errResponse = {
            statusCode : error.response.status,
            data : error.response.data,
        }        

        if(error.response.status in errorCode.httpErrorMessage ){
            errResponse.message = errorCode.httpErrorMessage[error.response.status]
        }else if(constant.excludedErrorCode.includes(error.response.status)){
            errResponse.message = error.response.statusText
        }
        else{
            errResponse.message = errorCode.commonErrorMessage.CMSG01
        }
        
        return errResponse
    };

    axios.interceptors.response.use(
        (response) => responseHandler(response),
        (error) => errorHandler(error)
     );

    return axios.request(setConfig(requestBody))
}


module.exports.callService = callService;