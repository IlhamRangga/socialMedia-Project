import authorization from "../middleware/middleware.js"

const authRoutes = (app, authController) => {
    app.post("/register", authController.register)
    app.post("/login", authController.login)
    app.get("/getUser",authorization, authController.getUser)
    app.delete("/logout", authController.logout)
}

export default authRoutes