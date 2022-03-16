import buildingService from '../service/buildingService.js'

const buildingController = {}

buildingController.post = async (req, res) => {
    const data = req.body
    data.ownerId = req.token.id
    data.image = req.file.filename
    try {
        const result = await buildingService.post(data)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}


buildingController.get = async (req, res) => {
    const token = req.token.id
    try {
        const result = await buildingService.get(token)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}


buildingController.put = async (req, res) => {
    const data = req.body
    try {
        const result = await buildingService.put(data)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}

buildingController.delete = async (req, res) => {
    const id = req.params.id
    try {
        const result = await buildingService.delete(id)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}


export default buildingController