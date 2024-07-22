import { userRoles } from "../models/User.js"

/**
 * 
 * @param {"User"|"Admin"|"Any"} role user role User, Admin, Any
 * @returns if authorized call next() otherwise throw an error
 */
const isAuthorized = (role) => {
    const roles = ["Any", ...userRoles]
    if (!roles.includes(role)) throw new Error(`Role: ${role} does not exist in ${roles}`)
    return async (request, response, next) => {
        if (!request.isAuthenticated())
            return response.status(401).json({ message: "User not authenticated" })
        if (role == "Any" || request.user.role == role)
            return next()
        return response.status(403).json({ message: "User not authorized" })
    }
}

export default isAuthorized