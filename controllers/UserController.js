const {User} = require('../models')
class UserController {
    static async formRegister(req, res) {
        try {
            res.render('formRegis')
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postRegister(req, res) {
        try {
            const { email,password,role} = req.body
            await User.create({email,password,role})
            .then(newUser => {
                res.redirect('/')
            })
        } catch (error) {
            res.send(error.message)
        }
    }

    static async formLogin(req, res) {
        try {

        } catch (error) {
            res.send(error.message)
        }
    }
    static async postLogin(req, res) {
        try {

        } catch (error) {
            res.send(error.message)
        }
    }

}
module.exports = UserController