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

    // VERIFICACION DE USUARIO EXISTENTE

        // 1° Almacenar el email de todo el objeto enviado por el usuario

                const {email} = req.body
                console.log(email)

        // 2° Buscar el email en los registros de la base de datos

                const userExists = await UserModel.findOne({email})
                console.log(userExists)

        // 3° Generar error en casi usuario exista

                if (userExists) {

                    const error = new Error("El usuario ya se encuentra registrado")

                    console.log(error.name) // Error
                    console.log(error.message)

                    return res.status(409).json({error: error.message})

                }        

    // REGISTRAR USUARIO

    // Forma 1 para añadir usuarios
       //await UserModel.create(req.body)



    // Forma 2 para añadir usuarios: instanciando el modelo

        const user = new UserModel(req.body)

        await user.save()

        res.send({mensaje:"Usuario creado con exito"})

}