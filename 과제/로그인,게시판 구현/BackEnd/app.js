const express = require("express");
const app =express();
const path = require('path');
const session = require ("express-session");
const dot = require('dotenv').config();
const cors = require('cors');
const { sequelize } = require("./models")
const signUpRouter = require('./routers/signUp');
const loginRouter = require('./routers/login');
const cookieParser = require('cookie-parser');

app.use(cors({
    origin : [
        "http://127.0.0.1:3000",
        "http://localhost:3000"
    ],
    credentials : true,
}))

app.use(cookieParser());

app.use(express.json());
app.use(session({
    secret : process.env.SESSION_KEY,
    resave : false,
    saveUninitialized : false,
}))

app.use('/signup',signUpRouter);
app.use('/', loginRouter)


sequelize
    .sync({force : false})
    .then(()=>{
        console.log("연결 성공!")
    })
    .catch((err)=>{
        console.log(err)
    })

app.listen(8080,()=>{
    console.log("서버 연결 완료")
})