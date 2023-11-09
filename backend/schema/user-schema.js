import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true,
        lowercase: true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    }
});

const user = mongoose.model('user',userSchema);

export default user;