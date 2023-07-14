import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';
import { login, signUp } from "../middleware"


const IdPw = ({formBtn, moveBtn}) => {

  const dispatch = useDispatch();
  const [id,setId] = useState("");
  const [pw,setPw] = useState("");


  const nav = useNavigate();
  function submitHandler(event){
    formBtn === "로그인" ? dispatch(login(id,pw)) : dispatch(signUp(id,pw,nav))
  }

  function loginMoveHandler(){
    formBtn === "로그인" ? nav('/signup') : nav('/')
  }

  return (
    <>
      <>
          <label>아이디</label> <br />
          <input placeholder='ID' onChange={(e)=>{setId(e.target.value)}}></input> <br />
          <label>비밀번호</label> <br />
          <input placeholder='PASSWORD' type='password' onChange={(e)=>{setPw(e.target.value)}}></input> <br />
          <button onClick = {submitHandler}>{formBtn}</button>
      </>
      <button onClick={loginMoveHandler}>{moveBtn}</button>
    </>
  )
}

export default IdPw