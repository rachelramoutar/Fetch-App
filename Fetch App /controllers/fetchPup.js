const express = require('express')
const router = express.Router()
const FetchPup = require('../models/fetchPup.js')


//SEED
router.get('/seed', async(req, res)=>{
    try { 
        await FetchPup.create([
            {
                ownerFirstName: 'Rachel',
                ownerLastName: 'Ramoutar',
                nameOfPet: 'Chance', 
                colorOfPet: 'Buff/Champagne', 
                sizeOfPet: 'Small',
                ageOfPet: 5,
            },{
                ownerFirstName: 'Paul',
                ownerLastName: 'Chapman',
                nameOfPet: 'Groot', 
                colorOfPet: 'Black and White', 
                sizeOfPet: 'Large',
                ageOfPet: 8,
            }
        ]);
        res.redirect('/fetch');
    } catch(err){
        console.error(err); 
        res.status(500).send("Internal Server Error")
    }
})

//INDEX
router.get('/', async (req, res)=>{
    try {
    const fetchAll = await FetchPup.find({})
    console.log(fetchAll)
    res.render('index.ejs', {
     fetchPup: fetchAll })
    } catch (err) {
        console.error(err)
    }
})

//NEW
router.get('/new', (req, res)=>{
 res.render('new.ejs')
})

//DELETE
router.delete('/:id', async (req, res)=>{
 try{
     await FetchPup.findByIdAndDelete(req.params.id)
     res.redirect('/fetch')
 } catch (err){
     console.error(err)
 }
})


//UPDATE
router.put('/:id', async (req, res)=>{
 try{ 
     const updatedFetch = await FetchPup.findByIdAndUpdate(req.params.id, req.body, {new:true})
 res.redirect('/fetch')
} catch (err){
 console.error(err)
}
})

//CREATE
router.post('/', async (req, res)=>{
 try{
     const createdPet = await FetchPup.create(req.body)
     console.log(req.body)
     res.redirect('/fetch')
 } catch(err){
     console.error(err)
 }
})

//EDIT
router.get('/:id/edit', async (req, res)=>{
 try{
     const editFetch = await FetchPup.findById(req.params.id)
 res.render('edit.ejs', {
     fetchPup: editFetch
 })
} catch (err){
 console.error(err)
}
})

//SHOW
router.get('/:id', async (req, res)=>{
 const showOne = await FetchPup.findById(req.params.id)
 res.render('show.ejs', {
     showOne
 })
})



module.exports = router 