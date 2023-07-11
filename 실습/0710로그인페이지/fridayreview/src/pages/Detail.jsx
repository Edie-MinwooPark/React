import React from 'react'
import { Header, Body } from "../components"
import {useLocation, useParams, useSearchParams } from "react-router-dom"
const Detail = () => {
    let temp = [{num : 10, name: "셔츠"},{num : 20, name : '바지'},{num : 40, name : "장갑"}];

    const params =useParams();
  return (
    <div>
        <Header name={"상세페이지"} />
        <div>{temp && temp[params.id].num}번</div>
        <div>이름 :{temp && temp[params.id].name}</div>
    </div>
  )
}

export default Detail