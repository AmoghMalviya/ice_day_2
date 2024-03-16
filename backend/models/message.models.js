import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    isAnsweredByML:{
        type: Boolean,
        default: false,
        required: true
    }
},{timestamps:true})

const Message = mongoose.model('Message', messageSchema)

export default Message