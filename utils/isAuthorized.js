/**
 * 
 * @param {"User"|"Admin"|"Any"} role user role User, Admin, Any
 * @returns if authorized call next() otherwise throw an error
 */
const isAuthorized = (role) => {
    const roles = ["User", "Admin", "Any"]
    if (!roles.includes(role)) throw new Error(`Role: ${role} does not exist in ${roles}`)
    return async (request, response, next) => {

        if (!request.user)
            return response.status(401).json({ message: "Not authenticated" })
        if (role == "Any" || request.user.role == role)
            return next()
        return response.status(403).json({ message: "Not authorized" })
    }
}

export default isAuthorized