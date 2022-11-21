require('dotenv').config()
const express = require('express')
const http = require('http')
const userRouter = require('./routes/users/user.router')

const app = express()
const cors = require('cors')

//to convert the json into the javascript object
app.use(express.json())
app.use(cors())

// app.get("/", (req, res)=>{
//     console.log("API running")
// })

app.use(express.json())
//listen
app.listen(process.env.PORT, ()=> {`The Server is running at port ${process.env.PORT}`})

app.use("/api/users", userRouter)
