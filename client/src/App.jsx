import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
import Message from "./pages/Message"


function App() {
  const { authUser } = useAuthContext()
  console.log(authUser)
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={authUser ? <Home/> : <Navigate to="/login" />}/>
        {/* <Route path="/register" element={<Register/>}/> */}
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/message" element={<Message />}/>
      </Routes>
      <Toaster  
      position="bottom-right"
      reverseOrder={false}/>
    </Router>
    </>
  )
}

export default App
