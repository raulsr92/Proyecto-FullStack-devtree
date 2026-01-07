
import {Router} from "express"
import UserModel from "./models/User"

import { createAccount } from "./handlers"

const router = Router()

//============ Routing

/*Ruta 1: Autenticación y Registro*/ 


router.post('/auth/register', createAccount)



export default router