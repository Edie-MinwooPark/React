// ES6문법
// {LoginBtn}
// export{LoginBtn}
// import {LoginBtn} from "./components/LoginBtn"


//단일로 가져와서 Login명으로 사용할거임
import Login from "./components/LoginBtn"

// 루트 요소 가상 DOM으로 생성
// 루트 설정
const root = React.DOM.createRoot(document.querySelector("#root"));
root.render(<Login />)