import { Router } from 'express'
import tenantController from '../controller/tenantController.js'
import tokenValidation from '../middlewares/tokenValidation.js'

const tenantRouter = Router()

tenantRouter.post('/pg/tenants', tokenValidation, tenantController.post)


export default tenantRouter