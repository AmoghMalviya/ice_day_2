import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
       type: String,
       enum: ['personal', 'organization'], 
       required: true
    },
    conversations:[
        {
            type:mongoose.Schema.Types.ObjectId,
            default:[],
            ref:'Message'
        }
    ]
},{timestamps:true})

const User = mongoose.model('User', userSchema) 

export default User