const express = require('express')
const router = require('./route/myroute')
require("dotenv").config()
const app = express()

app.use(router)

const port = process.env.PORT || 7000
app.listen(port,  () => {
    console.log(`Server is running on port ${port}`);
})

