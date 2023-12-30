const {Router} = require("express")
const { getUsers, signup, login, logout } = require('../controllers/auth')
const { signupValidation, loginValidation } = require('../validators/auth')
const { validationMW } = require('../middlewares/validation-mw')
const { userAuth } = require('../middlewares/auth-mw')
const router = Router()

router.get('/get-users', getUsers)
router.post('/signup', signupValidation, validationMW, signup)
router.post('/login', loginValidation, validationMW, login)
router.get('/logout', logout)
module.exports = router