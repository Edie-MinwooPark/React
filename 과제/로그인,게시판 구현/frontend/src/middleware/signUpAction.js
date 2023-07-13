import axios from "axios"


function signUp (id,pw){
    try {
        return async (dispatch)=>{
            console.log(id,pw)
            const response = await axios.post("http://127.0.0.1:8080/signup",{
                id,
                pw
            })
            
            console.log(response.data);
        }
    } catch (error) {
        console.log(error);
    }
}

export default signUp