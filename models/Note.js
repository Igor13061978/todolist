const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    location: {type: String, required: true},
    task: {type: String, required: true},
    work: {type: String},
    createNo: {type: Date},
    color: { type: String },
    owner: {type: Types.ObjectId, ref: 'User'}

})

module.exports = model('Note', schema)