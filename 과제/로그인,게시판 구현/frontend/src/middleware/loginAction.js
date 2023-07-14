import axios from "axios"


function login (id,pw,nav,setIdErr,setPwErr){
    try {
        return async (dispatch)=>{
            const response = await axios.post("http://127.0.0.1:8080",{id,pw},{withCredentials:true});
            const result = response.data;
            if(result === "idErr"){
                setIdErr(true);
            }else if(result === "pwErr"){
                setPwErr(true);
            }else{
                nav("/board")
            }
            
        }
    } catch (error) {
        console.log(error);
    }
}

export default login