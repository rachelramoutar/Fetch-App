const express = require('express');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fetchController = require('./controllers/fetchPup.js');
// const userController = require('./controllers/userProfile.js');
require("dotenv").config();

const port = process.env.PORT || 3500;

const mongoURI = process.env.MONGOURI;

app.get('/', (req, res)=>{
    res.redirect('/fetch')
});

async function connectToMongo(){
    try{
        await mongoose.connect(mongoURI)
        console.log(`I'm connected to mongoDB`)
    } catch (err){
        console.error(err)
    }
}

connectToMongo()

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use('/fetch', fetchController)
// app.use('/fetchUser', userController)


app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

