const db = require('../db')
const {hash}= require('bcryptjs')
const {sign} = require('jsonwebtoken')
const {SECRET} = require('../constants')

exports.getUsers = async (req, res)=>{
    try{
        const { rows } = await db.query('select user_id, email from users')
        return res.status(200).json({
            success: true,
            users: rows
        })
    }
    catch(error){
        console.log(error.message)
    }
}

exports.signup = async (req, res)=>{
    const {email, password} = req.body
    try{
        const hashedpw = await hash(password, 10)
        await db.query('insert into users(email, password) values ($1, $2)', [email, hashedpw])
        return res.status(201).json({
            success: true,
            message: 'signup complete'
    })
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            error: error.message
        })
    }
}

exports.login = async (req, res)=>{
    let user = req.user
    payload = {
        id: user.user_id,
        email: user.email
    }
    try{
        const token = await sign(payload, SECRET)
        return res.status(200).cookie('token', token, {httpOnly: true}).json({
            success: true,
            message: 'login successful'
        })
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            error: error.message
        })
    }
}
exports.logout = async (req, res)=>{
    try{
        return res.status(200).clearCookie('token', {httpOnly: true}).json({
            success: true,
            message: 'Logged out'
        })
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            error: error.message
        })
    }
}




//protected routes will be profile headline collection and edits
//user specific controller folder

//tested passport middleware with usr cookie check
//this protected route below works as expected

// router.get('/protected', userAuth, protected)
// exports.protected = async (req, res)=>{
//     try{
//         return res.status(200).json({
//             info: 'protected',
//         })
//     }
//     catch(error){
//         console.log(error.message)
//     }
// }