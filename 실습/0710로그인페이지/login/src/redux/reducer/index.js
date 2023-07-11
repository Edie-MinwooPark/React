let init = {
    isLogin : false,
    count : 0
}

function reducer(state = init, action){

    switch (action.type) {
        case "김치볶음밥":
            
            return {...state,count: state.count + 1}
        case "계란볶음밥" :
            return {...state,count : state.count -1}
        
        case "LOGIN" :
            return {...state,isLogin : action.payload};

        case "LOGOUT" :
            return {...state,isLogin : action.payload};
        default:
            return{...state};
    }
}

export default reducer;