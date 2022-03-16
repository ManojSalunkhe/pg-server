import { Router } from "express"
import { registerController } from '../controller/registerController.js'
import { loginController, getAccountController } from '../controller/loginController.js'
import tokenValidation from '../middlewares/tokenValidation.js';
import registerSuccessMail from '../middlewares/registerSuccessMail.js';
import { forgotPasswordController, resetPasswordController } from '../controller/passwordResetController.js';

const registrationRouter = Router()


registrationRouter.post('/pg/register', registerSuccessMail, registerController)
registrationRouter.post('/pg/login', loginController)
registrationRouter.get('/pg/account', tokenValidation, getAccountController)


//  PASSWORD RESET ROUTE

registrationRouter.post('/pg/forgot_password', forgotPasswordController);
registrationRouter.post('/pg/reset_password', resetPasswordController)


export default registrationRouter