import { registerService } from '../service/registerService.js'

export const registerController = async (req, res) => {
    const { body } = req
    try {
        const result = await registerService(body)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}