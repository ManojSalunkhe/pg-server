import Room from '../model/room.js';

const roomRepositary = {}

roomRepositary.post = async (data) => {
    try {

        const rooms = await Room.find({
            buildingId: data.buildingId
        })

        const uniqueRoom = rooms.filter((room) => room.number === Number(data.number));

        if (uniqueRoom.length == 0) {
            const result = await new Room(data);
            result.save();
            return result
        } else {
            return 'room number already exist in this building';
        }
    } catch (err) {
        return err
    }
}


roomRepositary.get = async (ownerId, buildingId) => {
    try {
        const result = await Room.find({
            buildingId: buildingId
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


roomRepositary.put = async (id, data) => {
    try {
        const result = await Room.findByIdAndUpdate(id, data, { new: true });
        return result;
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