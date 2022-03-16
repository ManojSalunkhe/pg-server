import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const SECRETKEY = process.env.SECRETKEY

const tokenValidation = (req, res, next) => {
    const token = req.headers["x-auth"]
    if (!token)  return res.json('token is required')
    try {
        const verified = jwt.verify(token, SECRETKEY)
        // console.log(verified)
        req.token = verified
    } catch (err) {
        return res.json(err.message)
    }
    next()
}

export default tokenValidation