require('dotenv').config()

const express = require('express')
const app = express()
const mongooes = require('mongoose')
const courseRouter = require('./routes/course')

// middleware

app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

// Route
app.use('/api/courses',courseRouter)
app.use('/images', express.static('images'))

// connect to db
mongooes.connect(process.env.MONGO_URI)
.then(()=> {
    // listen for port
    app.listen(process.env.PORT, ()=>{
    console.log("Listening for port ", process.env.PORT)
})
})

.catch((error) =>{
    console.log(error)
    
})