const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const fetchSchema = new Schema({ 
    ownerFirstName: {type: String, required: true},
    ownerLastName: {type: String, required: true},
    nameOfPet: {type: String, required: true},
    colorOfPet: {type: String, required: true},
    sizeOfPet: {type: String, required: true},
    ageOfPet: Number
})

const FetchPup = mongoose.model('FetchPup', fetchSchema)

module.exports = FetchPup;