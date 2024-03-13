import React from 'react'
import useLogout from '../hooks/useLogout'

const Home = () => {

  const {loading,logout} = useLogout()
  
  const clickButton = async(e) => {
    await logout()
  }

  return (
    <button onClick={clickButton}>halo</button>
  )
}

export default Home