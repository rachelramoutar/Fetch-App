const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 4000 

const pets= require('./models/fetch.js')
console.log(pets)

//MIDDLEWARE
app.use(express.urlencoded({extended: true}))


//INDEX
app.get('/fetch', (req, res)=>{
    res.render('index.ejs', {
        pets: allPets
    })
})

//NEW
app.get('/fetch/new', (req, res)=>{
    res.render('new.ejs')
})

//DELETE



//UPDATE
app.put('/fetch/:id', (req, res)=>{
    res.redirect('/fetch')
})

//CREATE
app.post('/fetch', (req, res)=>{
    res.redirect('/fetch')
})

//EDIT
app.get('/fetch/:id/edit', (req, res)=>{
    res.render('edit.ejs', {
        fetch: editFetch
    })
})

//SHOW
app.get('/fruits/:id', (req, res)=>{
    res.render('show.ejs', {
        pet: pets[req.params.id]
    })
})


app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})