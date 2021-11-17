const mongoose=require('mongoose')
const schema=mongoose.schema
const serviceProviderSchema=new mongoose.Schema({
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
    serviceDetails:{
        type:String
    },
    adhar:{
        type:Number
    }
   
})
module.exports=mongoose.model('serviceProvider',serviceProviderSchema)
