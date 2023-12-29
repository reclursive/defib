const {Router} = require("express")
const { getUsers, signup } = require('../controllers/auth')
const { signupValidation } = require('../validators/auth')
const { validationMW } = require('../middlewares/validation-mw')
const router = Router()

router.get('/get-users', getUsers)
router.post('/signup', signupValidation, validationMW, signup)

module.exports = router