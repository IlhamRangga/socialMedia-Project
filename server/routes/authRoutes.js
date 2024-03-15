import authMiddleware from "../middleware/AuthMiddleware.js"

const authRoutes = (app, authController) => {
    app.post("/register", authController.register)
    app.post("/login", authController.login)
    app.get("/getUser",authMiddleware, authController.getUser)
    app.delete("/logout", authController.logout)
}

export default authRoutes