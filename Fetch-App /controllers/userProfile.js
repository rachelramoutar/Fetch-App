const express = require('express');
const router = express.Router();
const UserProfile = require('../models/userProfile.js');

//INDEX
router.get('/', async (req, res) => {
    try {
        const fetchUsers = await UserProfile.find({})
        console.log(fetchUsers)
        res.render('indexUser.ejs', {
            fetchUser: fetchUsers
        })
    } catch (err) {
        console.error(err)
    }
})

//NEW
router.get('/newUser', (req, res) => {
    res.render('newUser.ejs')
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        await UserProfile.findByIdAndDelete(req.params.id)
        res.redirect('/fetchUser')
    } catch (err) {
        console.error(err)
    }
})


//UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.redirect('/fetchUser')
    } catch (err) {
        console.error(err)
    }
})


//CREATE
router.post('/', async (req, res) => {
    try {
        const createdUser = await UserProfile.create(req.body)
        console.log(req.body)
        res.redirect('/indexUser')
    } catch (err) {
        console.error(err)
    } 
})

//EDIT
router.get('/:id/edit', async (req, res) => {
    try {
        const editUser = await UserProfile.findById(req.params.id)
        res.render('editUser.ejs', {
            fetchUser: editUser
        })
    } catch (err) {
        console.error(err)
    }
})

//SHOW
router.get('/:id', async (req, res) => {
    const showUser = await UserProfile.findById(req.params.id)
    res.render('showUser.ejs', {
        showUser
    })
})


module.exports = router 