const express = require('express')
const app = express()
const {PORT} = require('./constants')

//mw init
app.use(express.json())


//routes
const authRoutes = require('./routes/auth')

//init home
app.use('/', authRoutes)

//start
const startup = () =>{
    try {
        app.listen(PORT, () =>{
            console.log(`running at port ${PORT}`)
        })
    }
    catch (error){
        console.log(`error: ${error.message}`)
    }
}

startup()