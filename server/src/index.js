const express = require('express')
const app = express()
const {PORT, CLIENT_URL} = require('./constants')
const cookiePrsr = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

//pp mw
require('./middlewares/passport-mw')

//mw init
app.use(express.json())
app.use(cookiePrsr())
app.use(cors({origin:CLIENT_URL, credentials: true}))
app.use(passport.initialize())


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