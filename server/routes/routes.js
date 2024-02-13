import authorization from "../middleware/middleware.js"

const routes = (app, authController) => {
    app.post("/register", authController.register)
    app.post("/login", authController.login)
    app.get("/",authorization, authController.getUser)
}

export default routes