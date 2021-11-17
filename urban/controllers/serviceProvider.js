const User=require('../models/serviceProvider')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const serviceProvider = require('../models/serviceProvider')

//service provider  registration
const register=(req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let user=new serviceProvider({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            serviceDetails:req.body.serviceDetails,
            password:hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message:'service provider  Added successfully'
            })
        })
        .catch(err=>{
            res.json({
                message:'An error occured'
            })
        })
    })
}

//service provider login
const login=(req,res,next)=>{
    var username=req.body.username
    var password=req.body.password
    serviceProvider.findOne({$or: [{email:username},{phone:username}]})
    .then(user=>{
       if(user){
          bcrypt.compare(password,user.password,function(err,result){
             if(err){
                 res.json({
                     error:err
                 })
             } 
             if(result){
                 let token=jwt.sign({name:user.name},'verySecretValue',{expiresIn:'1h'})
                 res.json({
                     message:'service provider Login Successful',
                     token
                 })
             }else{
                 res.json({
                     message:'password doesnot match',
                 })
             }
          })
       }else{
           res.json({
               message:'no user found'
           })
       }
    })
}

module.exports={
    register,login
}