const express = require('express');
const app = express()
const path = require('path')
const connectDB = require('./DB/connection')
const Port = process.env.Port || 3000;
app.listen(Port,()=>{
    console.log('Port connected')
})


app.use(express.static('Samuel Lawson'))
app.get('/Homepage.html', (req,res)=>{
    res.sendFile(path.resolve('Homepage.html'))
})

app.get('/Musicpage.html', (req,res)=>{
    res.sendFile(path.resolve('Musicpage.html'))
})


