import axios from "axios"


function login (id,pw){
    try {
        return async (dispatch)=>{
            const response = await axios.get("");
            // 데이터 결과값에 따라 렌더
            console.log(response.data);
        }
    } catch (error) {
        console.log(error);
    }
}

export default login