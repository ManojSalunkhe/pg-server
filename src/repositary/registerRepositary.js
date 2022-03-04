import { Register } from "../model/registration.js"
import bcrypt from 'bcryptjs'


export const registerRepositary = async (data) => {
    try {
        let securePassword = await bcrypt.hash(data.password, 10)
        data.password = securePassword
        // console.log(data)
        const result = await new Register(data)
        result.save()
        return result
    } catch (err) {
        return err
    }
}