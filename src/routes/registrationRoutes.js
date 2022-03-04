import { Router } from "express"
import { registerController } from '../controller/registerController.js'
import { loginController, getAccountController } from '../controller/loginController.js'
import tokenValidation from '../middlewares/tokenValidation.js'

const registrationRouter = Router()

registrationRouter.post('/pg/register', registerController)
registrationRouter.post('/pg/login', loginController)
registrationRouter.get('/pg/account', tokenValidation, getAccountController)

export default registrationRouter