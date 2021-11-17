const express = require('express');
const bookingServices= require('../models/bookingServices');
const router = express.Router()

router.post('/bookservice', async function (req, res) {
    let userData = await bookingServices.findOne({serviceType: req.body.serviceType });
    if (userData == null) {
        let newUser = new bookingServices(req.body);
        newUser.save(function (err, newUser) {
            if (err) {
                res.send(err)
            }
            else {
                res.send(newUser);
            }
        })
    }
    else {
        res.exists();
    }
})

module.exprots=router
