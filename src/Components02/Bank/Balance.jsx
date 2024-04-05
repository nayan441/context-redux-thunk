import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Balance = () => {
    const {a} = useSelector(state => state.counter);
  return (
    <>
    <div>Balance</div>
    <p>{a}</p>
    </>
  )
}

export default Balance