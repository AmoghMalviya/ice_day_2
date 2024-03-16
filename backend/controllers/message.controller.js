import User from '../models/user.models.js'
import Message from '../models/message.models.js'

export const getMessage = async (req,res) =>{
    try {
        const userId = req.params.id

        const user = await User.findById(userId).populate({
            path:'conversations',
            model:'Message'
        })

        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        const messages = user.conversations.map(conversation => conversation.message)

        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in Get Message Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const sendMessage = async (req,res) => {
    try {
        const userId  = req.params.id

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { message, isAnsweredByML } = req.body;

        const newMessage = new Message({
            message,
            isAnsweredByML
        });

        if (newMessage) {
            await newMessage.save();

            user.conversations.push(newMessage._id);
            await user.save();
        }

        res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
        console.log("Error in Send Message Controller",error.message)
        res.status(500).json({message:"Internal Server Error"})
    }
}