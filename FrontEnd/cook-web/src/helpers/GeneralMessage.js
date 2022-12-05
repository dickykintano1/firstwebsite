const httpErrorMessage = {
    400 : "Bad Request",
    404 : "Not Found",
    405 : "Method Not Allowed",
    408 : "Request Timeout",
    502 : "Bad Gateway",
    504 : "Gateway Timeout",
    598 : "Network Read Timeout",
    599 : "Network Connect Timeout Error"
}

const commonErrorMessage = {
    CMSG01 : "Something Error"
}

module.exports.httpErrorMessage = httpErrorMessage;
module.exports.commonErrorMessage = commonErrorMessage;