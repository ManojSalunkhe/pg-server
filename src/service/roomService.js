import roomRepositary from '../repositary/roomRepositary.js'

const roomService = {}


roomService.post = async (data) => {
    const result = await roomRepositary.post(data)
    return result
}

roomService.get = async (ownerId) => {
    const result = await roomRepositary.get(ownerId)
    return result
}

roomService.delete = async (id) => {
    const result = await roomRepositary.delete(id)
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