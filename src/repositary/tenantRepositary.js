import Tenant from "../model/tenant.js"
import Room from '../model/room.js'

const tenantRepositary = {}

tenantRepositary.post = async (data) => {
    try {
        const roomCheck = await Room.findOne({
            _id: data.roomId
        })
        console.log(roomCheck)

        if (roomCheck) {
            const result = await new Tenant(data)
            result.save()
            return result
        } else {
            return 'no room in the data base with the provided id'
        }

    } catch (err) {
        return err
    }
}


export default tenantRepositary