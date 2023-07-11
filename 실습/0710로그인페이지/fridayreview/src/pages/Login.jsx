import React from 'react'
import { Header, Body } from "../components"
const Login = ({login, setLogin}) => {
  return (
    <div>
        <Header name={"로그인 페이지"}/>
        <button onClick ={()=>{setLogin(!login)}}>로그인 or 로그아웃</button>
        <Body path={"/"} name={"메인"} login= {login} />
    </div>
  )
}

export default Login