
import mongoose from "mongoose";


export const connectDB = async ()=>{

    try {
        
        const connection = await mongoose.connect(process.env.URL_DB)

        console.log(connection)
        console.log("MongoDB Conectado")
        
    } catch (error) {
        console.log(error.message)

        process.exit(1)
    }
}