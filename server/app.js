import express from "express";
import connection from "./utils/mongoose/connection.js";
import Service from "./service/service.js";
import Controller from "./controller/controller.js";
import routes from "./routes/routes.js";
import UserRepository from "./repository/impl/user-repo.js";

connection()
const app = express()
app.use(express.json())

const userRepo = new UserRepository()
const service = new Service(userRepo)
const controller = new Controller(service)

routes(app, controller)

app.listen(3001, () => {
    console.log("listening on port 3001")
})