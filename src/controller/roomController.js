import roomService from "../service/roomService.js"

const roomController = {}

roomController.post = async (req, res) => {
    const data = req.body
    try {
        const result = await roomService.post(data)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}

roomController.get = async (req, res) => {
    const ownerId = req.token.id
    try {
        const result = await roomService.get(ownerId)
        return res.json(result)
    } catch (err) {
        return err
    }
}

roomController.delete = async (req, res) => {
    const id = req.params.id
    try {
        const result = await roomService.delete(id)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}


//tenant perspective
roomController.getAll = async (req, res) => {
    const id = req.query.id

    if (id) {
        try {
            const result = await roomService.getSingle(id)
            return res.json(result)
        } catch {
            return res.json(err)
        }
    }

    try {
        const result = await roomService.getAll()
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }

}


export default roomController