const express = require('express');
const pathm = require('path')
const cors = require('cors');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const contact = require('./cont.js');

var app = express();

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(pathm.join(__dirname, 'Career 2')));

app.post("/contactSend", async(req, res)=>{
    const snd = new contact({
        name: req.body.name,
        email: req.body.email,
        mobilenumber: req.body.mobilenumber,
        message: req.body.message
    })

    try {
        const ssuc = await snd.save();
        console.log(ssuc);
        res.send(ssuc);
    } catch (error) {
        console.log(error)
    }
})

mongoose.connect("mongodb://127.0.0.1/contact",).then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err)
});

app.listen(3000, () => {
    console.log("Connected to 3000")
}) 

