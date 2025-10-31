import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },

    password:{
        type: String,
        required:true,
        trim:true,
    }

});

//Crear el modelo Usuario

const User = mongoose.model('User', userSchema)

export default User
