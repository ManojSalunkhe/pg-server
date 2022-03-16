import { Router } from "express"
import roomController from "../controller/roomController.js"
import tokenValidation from '../middlewares/tokenValidation.js'

const roomRouter = Router()

roomRouter.get('/pg/building/:id/rooms', tokenValidation, roomController.get)
roomRouter.post('/pg/building/:id/rooms', tokenValidation, roomController.post)
roomRouter.delete('/pg/building/:b_id/room/:r_id', tokenValidation, roomController.delete)
roomRouter.put('/pg/building/:b_id/room/:r_id', tokenValidation, roomController.put)

//tenant perspective
roomRouter.get('/pg/allrooms', roomController.getAll)


export default roomRouter