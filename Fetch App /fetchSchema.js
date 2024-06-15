const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const fetchSchema = new Schema({ 
    ownerFirstName: {type: String, required: yes},
    ownerLastName: {type: String, required: yes},
    nameOfPet: {type: String, required: yes},
    colorOfPet: {type: String, required: yes},
    sizeOfPet: {type: String, required: yes},
    ageOfPet: {type: Number, default: 0.3}
})

const Fetch = mongoose.model('Fetch', fetchSchema)

module.exports = Fetch