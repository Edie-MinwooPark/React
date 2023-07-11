import React from 'react'
import { Header, Body } from "../components"
const Mypage = ({login}) => {
  return (
    <div>
        <Header name={"마이 페이지"} />
        <Body path={"/"} name={"메인"} login = {login} />
    </div>
  )
}

export default Mypage