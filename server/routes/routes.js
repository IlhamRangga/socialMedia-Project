import authorization from "../middleware/middleware.js"
import upload from "../utils/upload/upload.js"

const routes = (app, controller) => {
    app.post("/register", controller.register)
    app.post("/login", controller.login)
    app.get("/",authorization, controller.getUser)
    app.put("/update/:id", authorization, controller.updateUser)
    app.delete("/delete/:id", authorization, controller.deleteUser)
}

export default routes