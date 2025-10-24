//console.log("Bienvenidos")

import express from 'express'
import router from './router'

//Instancia del servidor

const app = express()

// Usar middleware de rutas

app.use("/",router)



export default app