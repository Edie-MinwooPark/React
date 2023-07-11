import React from 'react'
import { useSelector } from 'react-redux'

const CountView = () => {

    const count = useSelector(state => state.count)
  return (
    <div>{count}</div>
  )
}

export default CountView;