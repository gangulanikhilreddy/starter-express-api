const express = require('express')
const app = express()

const cron = require("node-cron");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
   app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Just got a request!')
})
app.listen(process.env.PORT || 3000)
