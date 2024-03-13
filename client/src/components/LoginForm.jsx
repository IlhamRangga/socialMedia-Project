import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

const LoginForm = () => {
  const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

  const {loading,login} = useLogin()
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    await login({username,password})
  }

  return (
    <div className="flex items-center justify-center min-w-80 mx-auto bg-gradient-to-br from-sky-500 to-fuchsia-500 h-screen">
      <div className="w-full p-6 rounded-lg shadow-m bg-white bg-opacity-45 max-w-96">
        <h1 className="text-3xl font-semibold text-center">
          Sign Up <span className="text-indigo-500"> Social Media</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input 
			type="text" 
			placeholder="Username" 
			className="w-full input input-bordered h-10"
			value={username} 
			onChange={(e) => setUsername(e.target.value)}
			required
			/>
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
			type="password" 
			placeholder="Enter Password" 
			className="w-full input input-bordered h-10" 
			value={password} 
			onChange={(e) => setPassword(e.target.value)}
			required
			/>
          </div>


          <div>
            <button className="btn btn-block btn-sm mt-6 mb-3 btn-primary">Login</button>
          </div>
          <Link to="/register">Don't have account?</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginForm