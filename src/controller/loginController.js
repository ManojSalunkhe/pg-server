import { loginService, getAccountService } from '../service/loginService.js'

export const loginController = async (req, res) => {
    try {
        const credentials = req.body
        const result = await loginService(credentials)
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}

export const getAccountController = async (req, res) => {
    const { token } = req
    try {
        const result = await getAccountService(token)
        
        return res.json(result)
    } catch (err) {
        return res.json(err)
    }
}