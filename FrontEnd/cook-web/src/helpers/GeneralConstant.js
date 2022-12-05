const httpMethods = {
    POST : 'POST',
    GET : 'GET',
    PUT : 'PUT',
    DELETE : 'DELETE',
    PATCH : 'PATCH'
}

const authorizationMethods = {
    Basic : 'Basic',
    BearerToken : 'BearerToken'
}

const excludedErrorCode = [
    500
]

module.exports.httpMethods = httpMethods;
module.exports.authorizationMethods = authorizationMethods;
module.exports.excludedErrorCode = excludedErrorCode;