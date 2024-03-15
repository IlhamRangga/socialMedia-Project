import authMiddleware from "../middleware/AuthMiddleware.js"

const messageRoutes = (app, messageController) => {
    app.post("/send/:id", authMiddleware, messageController.sendMessage)
    app.get("/get/:id", authMiddleware, messageController.getMessage)
    app.get("/chat/user", authMiddleware, messageController.getUserWeChat)
}

export default messageRoutes