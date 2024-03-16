import mongoose from "mongoose"

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri)
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log("Error in connecting to MongoDB : ",error.message)
    }
}
export default connectToMongoDB