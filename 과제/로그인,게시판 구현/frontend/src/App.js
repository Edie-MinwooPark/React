import './App.css';
import {Login,Board,SignUp } from "./pages"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path ="/" element={<Login />}/>
      <Route path ="/signup" element={<SignUp/>}/>
      <Route path ="/board" element={<Board/>}/>
    </Routes>
      
  );
}

export default App;
