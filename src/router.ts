
import {Router} from "express"
import UserModel from "./models/User"

const router = Router()

//============ Routing

/*Ruta 1: Autenticación y Registro*/ 


router.post('/auth/register', async(req,res)=>{

    console.log("Desde Register")

    await UserModel.create(req.body)

    res.send({mensaje:"Usuario creado con exito"})

})



export default router