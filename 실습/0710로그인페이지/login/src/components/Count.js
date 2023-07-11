import React from 'react'
import { useDispatch } from 'react-redux'
const Count = () => {

    const dispatch = useDispatch();
    function handlerAdd(){
        dispatch({type : "김치볶음밥"})
    }
    function handlerRemove(){
        dispatch({type : "계란볶음밥"})
    }
  return (
    <div>
        <button onClick={handlerAdd}>김치볶음밥</button>
        <button onClick={handlerRemove}>계란볶음밥</button>
    </div>
  )
}

export default Count