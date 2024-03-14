import {useState} from 'react'
import toast from "react-hot-toast" 
import axios from "axios"
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const handleInputErrors= ({username, password}) => {
    if(!username || !password) {
        toast.error("please fill all the field")
        return false
    }

    return true
}

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const navigate = useNavigate()

    const login = async({username, password}) => {
        const success = handleInputErrors({username, password})
        if(!success) return
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:3001/login", {
				username,
				password
			},{ withCredentials: true })
            localStorage.setItem("user", JSON.stringify(response.data))
            setAuthUser(response)
            toast.success(response.data.status)
            navigate("/")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, login}
}

export default useLogin