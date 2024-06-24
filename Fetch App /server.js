const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const fetchController = require('./controllers/fetchPup.js')
const port = 3500 

const mongoURI = 'mongodb+srv://rachelramoutar1:SEBPT319@sebpt-319.nqmdkxf.mongodb.net/fetch'

// const pets = require('./models/fetch.js')
// const Fetch = require('./fetch.js')
// console.log(pets)

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
app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"))
app.use('/fetch', fetchController)


app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

