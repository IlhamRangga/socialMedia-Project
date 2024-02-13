import express from "express";
import connection from "./utils/mongoose/connection.js";
import Service from "./service/service.js";
import AuthController from "./controller/authController.js";
import routes from "./routes/routes.js";
import UserRepository from "./repository/impl/user-repo.js";
import cookieParser from "cookie-parser";

connection()
const app = express()
app.use(express.json())
app.use(cookieParser())

const userRepo = new UserRepository()
const service = new Service(userRepo)
const authController = new AuthController(service)

routes(app, authController)

app.listen(3000, () => {
    console.log("listening on port 3001")
})