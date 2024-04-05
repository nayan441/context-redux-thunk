import React from 'react'
import Balance from '../Components02/Bank/Balance'
import Deposit from '../Components02/Bank/Deposit'
import Withdrawl from '../Components02/Bank/Withdrawl'

const Home = () => {
  return (
    <>
    <Balance></Balance>
    <Deposit></Deposit>
    <Withdrawl></Withdrawl>
    </>
  )
}

export default Home