import axios from "axios"


function signUp (id,pw,nav){


    try {
        return async (dispatch)=>{
            const response = await axios.post("http://127.0.0.1:8080/signup",{
                id,
                pw
            })
            
            console.log(response.data);

            // window.location.href ="/"
            nav('/')

        }
    } catch (error) {
        console.log(error);
    }
}

export default signUp