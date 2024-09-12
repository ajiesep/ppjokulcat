const express =require('express')
const UserController=require('../controllers/UserController')
const router = express.Router()


// register
app.get('/register',UserController.formRegister)
app.post('/register',UserController.postRegister)

//login
app.get('/register',UserController.formRegister)
app.post('/register',UserController.postRegister)



module.exports = router