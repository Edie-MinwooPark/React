let init = {
    id : null,
    title : "",
    content : "",
    user_id : "",
    view : null,
    likes : 0
}

function reducer (state = init, action){
    const { type, payload } = action
    switch (type) {
        case "LOAD" :    
            return {...state,id : payload.id, title : payload.title, title : payload.title, user_id : payload.user_id, view : payload.view, likes : payload.likes}
    
        default:
            return state;
    }
}

export default reducer;