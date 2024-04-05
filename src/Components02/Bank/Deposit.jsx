import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../redux/slice/depositWithdrawlSlice';

const Deposit = () => {
    const [updateBalance, setUpdateBalance] =useState(0)
    const dispatch = useDispatch()
    const handleSubmit=()=>{
        console.log("handleSubmit");
        dispatch(increment(updateBalance))
    }
  return (
    <>
    <div>Deposit</div>
    <input type="number" value={updateBalance} onChange={(e)=>{setUpdateBalance(e.target.value)}}/>
    <button onClick={handleSubmit}>Submit</button>
    </>

  )
}

export default Deposit