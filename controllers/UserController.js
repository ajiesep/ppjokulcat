const {User, Account} = require('../models')
const bcrypt = require("bcryptjs");

class UserController {
    static async formRegister(req, res) {
        try {
            res.render('ejs')
        } catch (error) {
            res.send(error.message)
        }
    }
    static async postRegister(req, res) {
        try {
            const { name, email, password, address, phoneNumber, role} = req.body
            let newUser = await User.create({email,password,role})
            await Account.create({name, email, password, address, phoneNumber,UserId:newUser.id, role})
            res.redirect('/')
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
            const { email, password } = req.body;

            let find = await User.findOne({ where: { email } });
      
            // if (find) {
            //   const isValidPassword = bcrypt.compareSync(password, find.password);
      
            //   if (isValidPassword) {
            //     req.session.UserId = find.id;
            //     req.session.role = find.role;
      
            //     if (findUser.role === "buyer") {
            //       return res.redirect("/buyer");
            //     } else if (findUser.role === "seller") {
            //       let account = await Account.findOne({
            //         where: {
            //           UserId: findUser.id,
            //         },
            //       });
            //       return res.redirect(`/seller/${account.id}`);
            //     }
            //   } else {
            //     const error = "invalid Email / Password";
            //     return res.redirect(`/login?errors=${error}`);
            //   }
            // } else {
            //   const error = "invalid Email / Password";
            //   return res.redirect(`/login?errors=${error}`);
            // }
        } catch (error) {
            res.send(error.message)
        }
    }

}
module.exports = UserController