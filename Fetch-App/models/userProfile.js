const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    ownerFirstName: {type: String, required: true},
    ownerLastName: {type: String, required: true},
    ownerAge: {type: Number, required: true},
    homePark: {type: String},
    address: {type: String},
    phoneNumber: {type: String},
    email: {type: String}
})

const UserProfile = mongoose.model('User', userSchema)

module.exports = UserProfile;