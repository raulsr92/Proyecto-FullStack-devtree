import {Request, Response} from "express"
import UserModel from "../models/User"

/*
req.body
{
    "name":"Raul",
    "email": "raul@gmail.com",
    "password":"abcdef$"
}
*/

export const createAccount = async(req: Request,res: Response)=>{

    console.log("Desde Register")

    const {email} = req.body

    console.log(email)

    const userExists = await UserModel.findOne({email})

    console.log(userExists)


    // Forma 1 para añadir usuarios
       //await UserModel.create(req.body)



    // Forma 2 para añadir usuarios: instanciando el modelo

        //const user = new UserModel(req.body)

        //await user.save()

    // res.send({mensaje:"Usuario creado con exito"})

}