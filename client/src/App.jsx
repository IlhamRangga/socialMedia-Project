import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"


function App() {
  const { authUser} = useAuthContext()
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={authUser ? <Home/> : <Navigate to="/login" />}/>
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <Register/>}/>
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login/>}/>
      </Routes>
      <Toaster  
      position="bottom-right"
      reverseOrder={false}/>
    </Router>
    </>
  )
}

export default App
