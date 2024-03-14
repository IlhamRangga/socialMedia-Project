import axios from 'axios'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const navigate = useNavigate()

    const logout = async() => {
        setLoading(true)
        try {
            const response = await axios.delete("http://localhost:3001/logout",{ withCredentials: true })

            localStorage.removeItem("user")
            setAuthUser(null)
            toast.success(response.data.status)
            navigate("/login")
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, logout}
}

export default useLogout