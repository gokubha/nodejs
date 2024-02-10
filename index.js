const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const PORT = process.env.PORT 

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`)
})

app.listen(PORT, (err)=>{
    console.log(`Express app listening at port ${PORT}`);
})