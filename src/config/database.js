import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE


const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.lajoo.mongodb.net/${DATABASE}?retryWrites=true&w=majority`)
        console.log("conneccted to database")
    } catch (err) {
        console.log(err)
    }
}

export default connectToDatabase