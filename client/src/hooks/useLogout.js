import axios from 'axios'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const logout = async() => {
        setLoading(true)
        try {
            const response = axios.delete("http://localhost:3001/logout",{ withCredentials: true })

            localStorage.removeItem("user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, logout}
}

export default useLogout