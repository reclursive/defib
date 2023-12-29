const db = require('../db')
const {hash}= require('bcryptjs')

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

