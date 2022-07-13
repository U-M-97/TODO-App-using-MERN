const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    task:{
        type:String,
    }
})

const Task = mongoose.model('TASK' , userSchema)

module.exports = Task