import mongoose from 'mongoose'

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    }
})

export const Register = mongoose.model('register', registrationSchema)