import User from "../models/user.models.js"
import bcrypt from 'bcryptjs'

export const signup = async (req,res) => {
    try {
        const {username,email,password,confirmPassword,role} = req.body

        if(password !== confirmPassword){
            return res.status(400).json({message : "Password doesn't match"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({message : "User already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role
        })

        if(newUser){
            await newUser.save()

            res.status(201).json({message : "User created successfully"})
        }else{
            res.status(400).json({message : "Failed to create user"})
        }

    } catch (error) {
        console.log("Error in signup controller : ",error.message)
        res.status(500).json({message : "Internal server error"})
    }
}

export const login = async (req,res) => {
    const {username,password} = req.body

    const user = await User.findOne({username})
    const validPassword = await bcrypt.compare(password,user?.password || "")

    if(!user || !validPassword){
        return res.status(400).json({message : "Invalid username or password"})
    }

    res.status(200).json({
        _id:user._id,
       username:user.username,
         email:user.email,
            role:user.role,
        message:"User Logged In"
        })

}

export const logout = (req,res) => {
    res.send('logout route')
}