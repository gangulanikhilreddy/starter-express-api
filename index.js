const express = require('express')
const app = express()

const cron = require("node-cron");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
let task = (val) => cron.schedule(val, function () {
   app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Just got a request!')
})
});
task('1 * * * * *')
task('0 30 18 * * *')
app.listen(process.env.PORT || 3000)
