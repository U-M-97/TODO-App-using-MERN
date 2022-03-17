const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config({path : './config.env'})
app.use(cors())
app.use(express.json())
const port = process.env.PORT
const DB = process.env.URL

app.use(require("./controller"))

mongoose.connect(DB , {
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection Successfull")
}).catch((err) =>{
    console.log(err)
})


app.listen(port, () =>{
    console.log("Server is running on PORT " + port)
})
