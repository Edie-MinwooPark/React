import React from 'react'

const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="">아이디</label> <br />
        <input type="text" /> <br />
        <label>비밀번호</label> <br />
        <input type='text'></input> <br/>
        <button>로그인</button> 
      </form>
      <button>회원가입</button>
    </div>
  )
}

export default Login