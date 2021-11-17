const mongoose = require('mongoose');

const bookingServicesSchema = new mongoose.Schema({
    serviceType: { type: String },
    schedule: [{
        hours: {
            type: Number, required: true, min: 0, max: 23
        },
        minutes: {
            type: Number, required: true, min: 0, max: 59
        },
        seconds: {
            type: Number, required: true, min: 0, max: 59
        }
    }],
    data:{
        type:Date,
        default:Date.now
    },
    price: { type: Number },
    address: { type: String },
    email: { type: String,unique:true,required:true },
    phone:{type:Number}
})

module.exports = mongoose.model('bookingServices', bookingServicesSchema);