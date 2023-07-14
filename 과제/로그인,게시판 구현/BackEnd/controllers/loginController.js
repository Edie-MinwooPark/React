const { User } = require('../models');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const session = require("express-session");

// bcrypt 로 입력 비밀번호를 암호화해서 확인
// 맞으면 jwt 발행


exports.login = async (req,res)=>{
    try {
        const { id, pw } = req.body;
        const user = await User.findOne({where : {user_id : id}})
        console.log(user);
        if(user==null){
            console.log("아이디에러")
            res.send("idErr");
            return;
        }

        const same = bcrypt.compareSync(pw,user.password)
        console.log(same)
        if(!same){
            console.log("비밀번호에러")
            res.send("pwErr");
            return;
        }

        const accessToken = jwt.sign(
        {
            id ,
            username : user.user_id
        },
        process.env.ACCESS_TOKEN_KEY,
        {
            expiresIn : "5m"
        }
        )
        req.session.access_token = accessToken;
        console.log(req)
        if(user!=null && same){
            res.cookie("access_token",accessToken,{ domain : "127.0.0.1",httpOnly: true});
            res.send(true);
        }


    } catch (error) {
        res.send(error);
    }
}