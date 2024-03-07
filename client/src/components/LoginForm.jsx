import React,{useState} from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")


	const login = async(e) => {
		e.preventDefault()
		try {
			const response =await axios.post("http://localhost:3001/login", {
				username,
				password
			},{ withCredentials: true })
			console.log(response.data)
		} catch (error) {
			console.log(error)
		}
	}

  return (
    <div className="flex items-center justify-center min-w-80 mx-auto bg-gradient-to-br from-sky-500 to-fuchsia-500 h-screen">
      <div className="w-full p-6 rounded-lg shadow-m bg-white bg-opacity-45 max-w-96">
        <h1 className="text-3xl font-semibold text-center">
          Sign Up <span className="text-indigo-500"> Social Media</span>
        </h1>

        <form onSubmit={login}>
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
            <button className="btn btn-block btn-sm mt-6 btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm