import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Detail, Main, Login, Mypage, Shop } from './pages'
import { useState } from 'react'

function App() {
  const [login,setLogin] = useState(false);
  const Redirect = ()=>{
    return login === true? <Mypage login={login} /> : <Navigate to ={"/"} />
  }
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Main login={login} />} />
        <Route path ="/login" element ={<Login login={login} setLogin={setLogin} />} />
        <Route path ="/shop" element = {<Shop login={login}/>} />
        <Route path ="/detail/:id/:num/:name" element={<Detail login={login} />}  />
        <Route path ="/mypage" element={<Redirect />}/>
      </Routes>
    </div>
  );
}

export default App;
