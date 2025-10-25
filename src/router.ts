
import {Router} from "express"

const router = Router()

//============ Routing

/*Ruta 1: Autenticación y Registro*/ 


router.post('/auth/register', (req,res)=>{

    console.log("Desde Register")

    console.log(req.body)

    res.json(req.body)

})



export default router