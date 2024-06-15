const express = require('express')
const app = express()
const port = 4000 

const pets= require('./models/fetch.js')
console.log(pets)

//INDEX
app.get('/fetch', (req, res)=>{
    res.render('index.ejs', {
        allPets: pets,
    })
})

//NEW
app.get('/fetch/new', (req, res)=>{
    res.render('new.ejs')
})

//DELETE



//UPDATE


//CREATE


//EDIT


//SHOW
app.get('/fruits/:index', (req, res)=>{
    res.render('show.ejs', {
        pet: pets[req.params.index]
    })
})


app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})