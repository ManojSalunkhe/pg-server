import Room from '../model/room.js'

const roomRepositary = {}

roomRepositary.post = async (data) => {
    try {
        const unique = await Room.findOne({
            number: data.number
        })

        if (!unique) {
            const result = await new Room(data)
            result.save()
            return result
        } else {
            return "room number already exist"
        }

    } catch (err) {
        return err
    }
}


roomRepositary.get = async (ownerId) => {
    try {
        const result = await Room.find({
            ownerId: ownerId
        })
        return result
    } catch (err) {
        return err
    }
}

roomRepositary.delete = async (id) => {
    try {
        const result = await Room.findByIdAndDelete(id)
        if (result) return result
        else return "no room found with the id specified"
    } catch (err) {
        return err
    }
}


//tenant perspective
roomRepositary.getAll = async () => {
    try {
        const result = await Room.find()
        // console.log(result)
        return result
    } catch (err) {
        return err
    }
}

//tenant perspective
roomRepositary.getSingle = async (id) => {
    try {
        const result = await Room.findById({
            _id: id
        })
        // console.log(result)
        return result
    } catch (err) {
        return err
    }
}

export default roomRepositary