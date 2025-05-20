import express from "express"
import { PrismaClient } from './generated/prisma/index.js'
export const prisma = new PrismaClient()
import cors from "cors"
import { router } from "./Routes/Router.js"
import cookieParser from "cookie-parser"


const PORT = 3003
const app = express()


app.use(cors({ 
    origin: 'http://localhost:5174', 
    credentials: true 
}))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

prisma
    .$connect()
    .then(() =>{console.log("сервер запущен")}).catch((err) => {console.log("ошибка подключения к базе данных", err)})
app.use(express.json())
app.use('/api', router)




app.listen(PORT, () =>{
    console.log('сервер на порту ' + PORT + ' запущен')
})