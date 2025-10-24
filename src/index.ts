//console.log("Bienvenidos")

import express from 'express'

//Instancia del servidor

const app = express()

//Routing

app.get('/', (req,res)=>{

    res.send('Hola mundo desde el endpoint de Express')

})

app.get('/historial', (req,res)=>{

    res.send('Tu Historial')

})

app.get('/blog', (req,res)=>{

    res.send('Este es mi blog')

})

//Inicializar

app.listen("4000", ()=>{
    console.log("Servidor Funcionando")
    console.log(`Servidor: http://localhost:4000`)
}
)