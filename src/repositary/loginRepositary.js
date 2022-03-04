import { Register } from "../model/registration.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRETKEY = process.env.SECRETKEY

export const loginRepositary = async (credentials) => {
    const { email, password } = credentials
    try {
        let result = await Register.findOne({
            email: email
        })

        if (!result) return 'email is invalid'
        
        if (result) {
            const passwordCompare = await bcrypt.compare(password, result.password)
            if (!passwordCompare) return "password is invalid"
            const authToken = passwordCompare && jwt.sign({ id: result.id, email: result.email }, SECRETKEY, { expiresIn: '2h' })
            result = result.toJSON()
            result.token = authToken
        }
        return result
    } catch (err) {
        return err
    }

}

export const getAccountRepositary = async (token) => {
    try {
        const result = await Register.findOne({
            email: token.email
        })
        return result
    } catch (err) {
        return err
    }
}