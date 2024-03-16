import jwt from 'jsonwebtoken'
import User from '../models/user.models.js'

export const protectRoutes = async (req,res,next) => {
    try {
        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({error: "No token found, authorization denied"})
        }

        const decoded = jwt.verify(token,process.env.JWT_TOKEN_SECRET)

        if(!decoded){
            return res.status(401).json({error: "Invalid token, authorization denied"})
        }

        const user = await User.findById(decoded.userId).select('-password')

        if(!user){
            return res.status(401).json({error: "No user found with this token, authorization denied"})
        }

        req.user = user
        next()
    } catch (error) {
        console.log(`Error in protetcRoutes middleware: `,error.message)
        res.status(401).json({message: 'Not authorized, token failed'})
    }
}