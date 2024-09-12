const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})
// register
router.get('/register', UserController.formRegister)
router.post('/register', UserController.postRegister)

//login
router.get('/login', UserController.formRegister)
router.post('/login', UserController.postRegister)



module.exports = router