
const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')

const faceSchemacnn = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required: true
    },
    name: {
        type : String,
        required :true
    },
    roll_no: {
        type : String,
        required :true
    },
    embedding :{
        type : Array, //Store as an array of numbers
        required : true
    },
    createdAt : {
        type : Date,
        default: Date.now
    }

});

module.exports = mongoose.model('FaceEmbeddingCNN',faceSchemacnn);