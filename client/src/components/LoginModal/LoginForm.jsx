import './LoginForm.css'

const LoginForm = () => {
    return(
        <>
        <div className="form-container">
            <h1>Login Form</h1>
            <form className='input-container'>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
            </form>
        </div>
        </>
    )
}

export default LoginForm