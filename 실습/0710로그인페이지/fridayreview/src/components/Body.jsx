import React from 'react'
import { Link, useNavigate } from "react-router-dom"

const Body = ({path,name,login, item}) => {
    const nav = useNavigate();
  return (
    <div className='body'>
        <Link to={path}>{name} 페이지 이동</Link>
        <button onClick={()=>{nav(path)}}>{name} 페이지 이동</button>

        {item && item.id ? <div>{item.id}번</div> : null}
        {item && item.num ? <div>{item.num}번</div> : null}
        {item && item.name ? <div>{item.name}번</div> : null}
        {login ? <div>로그인 되었음</div> : <div>로그인 안되었음</div>}
    </div>
  )
}

export default Body