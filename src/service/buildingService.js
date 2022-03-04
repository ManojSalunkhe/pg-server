import buildingRepositary from '../repositary/builgingRepositary.js'

const buildingService = {}


buildingService.post = async (data) => {
    const result = await buildingRepositary.post(data)
    return result
}

buildingService.get = async (token) => {
    const result = await buildingRepositary.get(token)
    return result
}

buildingService.put = async (data) => {
    const result = await buildingRepositary.put(data)
    return result
}


buildingService.delete = async (id) => {
    const result = await buildingRepositary.delete(id)
    return result
}


export default buildingService