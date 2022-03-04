import mongoose from 'mongoose'

const tenantSchema = new mongoose.Schema({
    name: { type: String },
    mobile: { type: Number },
    buildingId: { type: String },
    roomId: { type: String }
})

const Tenant = mongoose.model('tenant', tenantSchema)

export default Tenant