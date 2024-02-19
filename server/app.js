import express from "express";
import connection from "./utils/mongoose/connection.js";
import AuthService from "./service/authService.js";
import AuthController from "./controller/authController.js";
import authRoutes from "./routes/authRoutes.js";
import UserRepository from "./repository/impl/user-repo.js";
import cookieParser from "cookie-parser";
import tokenRoutes from "./routes/tokenRoutes.js";
import cors from "cors"
import TokenController from "./controller/tokenController.js";
import TokenService from "./service/tokenService.js";
import fileRoutes from "./routes/fileRoutes.js";

connection()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

const userRepo = new UserRepository()

const authService = new AuthService(userRepo)
const authController = new AuthController(authService)

const tokenService = new TokenService(userRepo)
const tokenController = new TokenController(tokenService)

authRoutes(app, authController)
tokenRoutes(app, tokenController)
fileRoutes(app)

app.listen(3001, () => {
    console.log("listening on port 3001")
})