let init = {
    isLogin : false,
    id : ""
}

function reducer (state = init, action){

    const { type, payload } = action;

    switch (type) {
        case "LOGIN" :
            return {...state,id : payload.id , isLogin : true};
        
        case "LOGOUT" :
            return {...state, id: "", isLogin : false};
    
        default:
            return state;
    }
}

export default reducer;