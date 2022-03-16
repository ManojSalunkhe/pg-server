import roomRepositary from '../repositary/roomRepositary.js'

const roomService = {}


roomService.post = async (data) => {
    const result = await roomRepositary.post(data)
    return result
}

roomService.get = async (ownerId, buildingId) => {
    const result = await roomRepositary.get(ownerId, buildingId)
    return result
}

roomService.delete = async (id) => {
    const result = await roomRepositary.delete(id)
    return result
}

roomService.put = async (id,data) => {
    const result = await roomRepositary.put(id,data)
    return result
}


//tenant perspective
roomService.getAll = async () => {
    const result = await roomRepositary.getAll()
    return result
}

//tenant perspective
roomService.getSingle = async (id) => {
    const result = await roomRepositary.getSingle(id)
    return result
}


export default roomService