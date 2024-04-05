import React, { useState } from 'react'
import { decrement } from '../../redux/slice/depositWithdrawlSlice'
import { useDispatch, useSelector } from 'react-redux';

const Withdrawl = () => {
    const [updateBalance, setUpdateBalance] =useState(0)
    const dispatch = useDispatch()
    const handleSubmit=()=>{
        console.log("handleSubmit");
        dispatch(decrement(updateBalance))
    }
  return (
    <>
    <div>Withdrawl</div>
    <input type="number" value={updateBalance} onChange={(e)=>{setUpdateBalance(e.target.value)}}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Withdrawl

