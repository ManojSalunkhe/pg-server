import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    type: { type: String },
    number: { type: Number },
    rent: { type: Number },
    buildingId: { type: String },
    ownerId: { type: String }
})

const Room = mongoose.model('room', roomSchema)

export default Room