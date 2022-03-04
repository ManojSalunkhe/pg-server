import express from 'express'
import connectToDatabase from './src/config/database.js'
import dotenv from 'dotenv'
import cors from 'cors'
import registrationRouter from './src/routes/registrationRoutes.js'
import buildingRouter from './src/routes/builgingRoutes.js'
import roomRouter from './src/routes/roomRoutes.js'
import tenantRouter from './src/routes/tenantRoutes.js'

dotenv.config()
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())
app.use(registrationRouter)
app.use(buildingRouter)
app.use(roomRouter)
app.use(tenantRouter)

connectToDatabase()




app.listen(PORT, () => {
    console.log("server has started")
})