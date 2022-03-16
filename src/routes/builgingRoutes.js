import { Router } from 'express'
import { upload } from '../middlewares/imageStorage.js'
import tokenValidation from '../middlewares/tokenValidation.js'
import buildingController from '../controller/buildingController.js'

const buildingRouter = Router()



buildingRouter.get('/pg/buildings', tokenValidation, buildingController.get)
buildingRouter.post('/pg/buildings', tokenValidation, upload.single('image'),buildingController.post)
buildingRouter.put('/pg/buildings/:id', tokenValidation, buildingController.put)
buildingRouter.delete('/pg/buildings/:id', tokenValidation, buildingController.delete)

export default buildingRouter