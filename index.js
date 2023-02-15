const express = require('express')
const app = express()

const cron = require("node-cron");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
let task = (val) => cron.schedule(val, function () {
    console.log(val)
    console.log("running a task every 10 second");
});
task('1 * * * * *')
task('0 30 18 * * *')
app.listen(process.env.PORT || 3000)
