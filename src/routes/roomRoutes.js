import { Router } from "express"
import roomController from "../controller/roomController.js"
import tokenValidation from '../middlewares/tokenValidation.js'

const roomRouter = Router()

roomRouter.get('/pg/rooms', tokenValidation, roomController.get)
roomRouter.post('/pg/rooms', tokenValidation, roomController.post)
roomRouter.delete('/pg/rooms/:id', tokenValidation, roomController.delete)

//tenant perspective
roomRouter.get('/pg/allrooms', roomController.getAll)


export default roomRouter