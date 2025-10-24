
import {Router} from "express"

const router = Router()

//Routing

router.get('/', (req,res)=>{

    res.send('Hola mundo desde el endpoint de Express')

})

router.get('/historial', (req,res)=>{

    res.send('Tu Historial')

})

router.get('/blog', (req,res)=>{

    res.send('Este es mi blog')

})

export default router