const mongoose = require('mongoose');
const crypto = require('crypto');
const userSchema = new mongoose.Schema({
    username :{
        type:String,
        trim:true,
        max:32,
        lowercase:true,
        unique:true,
        required:true,
        index:true,
    },
    name:{
        type:String,
        trim:true,
        required:true,
        max:32
    },
    email:{
        type:String,
        required:true,
        lawercase:true,
        unique:true,
    },
    profile:{
        type:String,
        required:true
    },
    hash_password:{
        type:String,
        required:true
    },
    salt:String,
    about:{
        type:String,
    },
    role:{
        type:Number,
        trim:true
    },
    photo:{
        data:Buffer,
        contentType:String,
    },
    resetPasswordLink:{
        data:String,
        default:''
    }
},{timestamps:true});
module.exports = mongoose.model('User',userSchema);