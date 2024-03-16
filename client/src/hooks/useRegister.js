import{ useState } from 'react'
import toast from "react-hot-toast" 
import axios from "axios"
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const handleInputErrors= ({username, email,password, confPassword}) => {
    if(!username || !email || !password || !confPassword) {
        toast.error("please fill all the field")
        return false
    }
    if(password !== confPassword) {
        toast.error("password doesn't match")
        return false
    }
    if(password.lenght <= 8) {
        toast.error("password must be at least 8 characters")
        return false
    }
    return true
}

const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const navigate = useNavigate()

    const register = async({username, email, password, confPassword}) => {
        const success = handleInputErrors({username, email,password, confPassword})
        if(!success) return
        setLoading(true)
        try {
            const response = await axios.post("http://localhost:3001/register", {
				username,
				email,
				password,
				confPassword
			},{ withCredentials: true })
            setAuthUser(true)
            toast.success(response.data.status)
            localStorage.setItem("authenticated", true)
            navigate("/")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, register}
}

export default useRegister
