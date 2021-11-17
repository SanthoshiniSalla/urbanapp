const express=require('express')
const mongoose=require('mongoose')
const morgan=require('morgan')
const bodyParser=require('body-parser')
const AuthRoute=require('./routes/auth')
//const crudRoute=require('./routes/crud')
const multer=require('multer');

mongoose.connect('mongodb+srv://santhoshinisalla:salla@cluster0.7ol15.mongodb.net/database?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(

    () => console.log('db conneted...')
).catch(err => console.log(err))

const app=express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'))

const PORT=process.env.PORT|| 3000
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api',AuthRoute)
//app.use('/api',crudRoute)

module.exports = app;