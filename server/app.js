import express from "express";
import AuthService from "./service/authService.js";
import AuthController from "./controller/authController.js";
import authRoutes from "./routes/authRoutes.js";
import UserRepository from "./repository/impl/user-repo.js";
import cookieParser from "cookie-parser";
import tokenRoutes from "./routes/tokenRoutes.js";
import cors from "cors"
import TokenController from "./controller/tokenController.js";
import TokenService from "./service/tokenService.js";
// import postRoutes from "./routes/postRoutes.js";
// import PostService from "./service/postService.js";
// import PostController from "./controller/postController.js";
// import PostRepository from "./repository/impl/post-repo.js";
import http from "http";
import {Server} from "socket.io";



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
const server = http.createServer(app)
const io = new Server(server)

const userRepo = new UserRepository()

const authService = new AuthService(userRepo)
const authController = new AuthController(authService)

const tokenService = new TokenService(userRepo)
const tokenController = new TokenController(tokenService)

// const postRepo = new PostRepository()

// const postService = new PostService(postRepo)
// const postController = new PostController(postService)

authRoutes(app, authController)
tokenRoutes(app, tokenController)
// postRoutes(app, postController)

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.listen(3001, () => {
    console.log("listening on port 3001")
})