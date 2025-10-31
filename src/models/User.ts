import mongoose from 'mongoose';
const { Schema } = mongoose;

interface IUser{
    name: string
    email:string
    password: string
}

const userSchema = new Schema<IUser>({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email:{
        type: String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // regex para validar email
    },

    password:{
        type: String,
        required:true,
        trim:true,
    }

});

//Crear el modelo Usuario

const UserModel = mongoose.model<IUser>('User', userSchema)

export default UserModel
