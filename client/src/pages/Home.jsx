import React, { useEffect } from 'react'
import useLogout from '../hooks/useLogout'
import useToken from '../hooks/useToken'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {axiosJWT} = useToken()
  const {loading,logout} = useLogout()

  const navigate = useNavigate()
  
  const clickButton = async() => {
    try {
      const response = await axiosJWT.get("http://localhost:3001/getUser",{ withCredentials: true })
      console.log(response)
      return response.data.user
    } catch (error) {
      navigate("/login")
      console.log(error)
    }
  }

  return (
    <>
    <button onClick={clickButton}>halos</button>
    </>
  )
}

export default Home