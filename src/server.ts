//console.log("Bienvenidos")

import express from 'express'
import router from './router'
import {connectDB} from './config/db'
import dontev from "dotenv"


//Instancia del servidor

const app = express()

//Cargar variables de entorno
dontev.config()

connectDB()

//Habilitar lectura de datos

app.use(express.json())

// Usar middleware de rutas

app.use("/",router)



export default app