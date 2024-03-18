import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
import HomePage from "./pages/HomePage"
import ConversationPage from "./pages/ConversationPage"
import MessagePage from "./pages/MessagePage"
import LoginPage from "./pages/LoginPage"


function App() {
  const { authUser } = useAuthContext()
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to="/login" />}/>
        {/* <Route path="/register" element={<Register/>}/> */}
        <Route path="/register" element={authUser ? <Navigate to="/" /> : <RegisterPage/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <LoginPage/>}/>
        <Route path="/message" element={<MessagePage />}/>
        <Route path="/conversation" element={<ConversationPage/>}/>
      </Routes>
      <Toaster  
      position="bottom-right"
      reverseOrder={false}/>
    </Router>
    </>
  )
}

export default App
