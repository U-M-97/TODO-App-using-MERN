const express = require('express')
const router = express.Router()
const Task = require('./model')

// router.get('/' , (req,res)=>{
//     res.send("Connectes successful;y")
// })

router.post('/' , async (req,res) =>{
    const {input} = req.body
    if(!input){
        console.log("No task added")
    }else{
        const newTask = await new Task({task:input})
        await newTask.save()
        res.status(400).send({message: "Task added successfully"})
    }
})

router.get('/display' , async (req,res) =>{
    const task = await Task.find()
    res.json(task)
})

router.delete('/delete/:id' , async (req,res) =>{
    const task = await Task.findByIdAndDelete(req.params.id)
    res.json(task)
})

router.delete('/deleteAll' , async (req,res) =>{
    const task = await Task.deleteMany()
    res.json(task)
})

module.exports = router