import express from "express"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import cors from "cors"
import { router } from "./Routes/Router.js"
import cookieParser from "cookie-parser"
import path from 'path';


const PORT = 3002
const app = express()


app.use(cors({ 
	origin: 'http://localhost:5173', 
	credentials: true 
}))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

prisma
    .$connect()
    .then(() =>{console.log("сервер запущен")}).catch((err) => {console.log("ошибка подключения к базе данных", err)})
app.use(express.json())
app.use('/api', router)
app.use('/uploads', express.static('uploads'))


app.listen(PORT, () =>{
    console.log(`сервер на порту ${PORT} запущен`)
})