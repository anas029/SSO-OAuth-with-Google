const regenerate = () => {
    return (request, response, next) => {
        // register regenerate & save after the cookieSession middleware initialization
        // because cookie-sesion does not have these functions
        if (request.session && !request.session.regenerate) {
            request.session.regenerate = (cb) => {
                cb()
            }
        }
        if (request.session && !request.session.save) {
            request.session.save = (cb) => {
                cb()
            }
        }
        next()
    }
}
export default regenerate