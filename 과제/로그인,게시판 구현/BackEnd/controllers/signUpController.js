const { User } = require("../models");
const bcrypt = require('bcrypt');

exports.signUp = async (req,res)=>{
    try {
        console.log(req.body);
        const {id, pw } = req.body
        const hash = bcrypt.hashSync(pw, 10);
        await User.create({
            user_id : id,
            password : hash
        })
        res.send(true);
    } catch (error) {
        console.log(error);
    }
}