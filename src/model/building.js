import mongoose from 'mongoose'

const buildingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    landmark: { type: String, required: true },
    address: { type: String, required: true, unique: true },
    ownerId: { type: String },
    image: { type: String }
})

export const Building = mongoose.model('building', buildingSchema)