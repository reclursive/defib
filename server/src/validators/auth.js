const { check } = require('express-validator')
const db = require('../db')


//pw
const password = check('password').isLength({min: 8, max:15}).withMessage('Password must be between 8-15 characters')

//email
const email = check('email').isEmail().withMessage('Please provide valid email')

//unique
const emailUnique = check('email').custom(async (value)=>{
    const { rows } = await db.query('SELECT * from users WHERE email = $1', [
        value,
    ])
    if (rows.length){
        throw new Error('Email already exists with Defib.')
    }
})

module.exports = {
    signupValidation: [email, password, emailUnique]
}