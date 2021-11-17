const mongoose=require('mongoose')
const schema=mongoose.schema
const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,unique:true,required:true
    },
    phone:{
        type:String
    },
    password:{
        type:String
    },
    img:{
        type:String
    }
})
module.exports=mongoose.model('User',userSchema)
