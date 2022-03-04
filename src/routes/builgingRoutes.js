import { Router } from 'express'
import tokenValidation from '../middlewares/tokenValidation.js'
import buildingController from '../controller/buildingController.js'

const buildingRouter = Router()

buildingRouter.get('/pg/buildings', tokenValidation, buildingController.get)
buildingRouter.post('/pg/buildings', tokenValidation, buildingController.post)
buildingRouter.put('/pg/buildings', tokenValidation, buildingController.put)
buildingRouter.delete('/pg/buildings/:id', tokenValidation, buildingController.delete)

export default buildingRouter