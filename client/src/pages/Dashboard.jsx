import React,{useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("")

  useEffect(() => {
    accessToken()
  },[])

  const accessToken = async () => {
    try {
      const response = await axios.get("http://localhost:3001/token", { withCredentials: true }); 
      console.log(response.data)   
    } catch(error){
      setError(error)
    }
  }

  return (
    <div>
        <Navbar/>
    </div>
  )
}

export default Dashboard