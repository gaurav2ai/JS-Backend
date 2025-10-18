require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("chaimasalcom")
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Login Bhai</h1>")
})

app.get('/google',(req,res)=>{
    res.send("<h1>Welcome to google</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})