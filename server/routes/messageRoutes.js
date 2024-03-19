import authMiddleware from "../middleware/AuthMiddleware.js"

const messageRoutes = (app, messageController) => {
    app.post("/message/send/:id", authMiddleware, messageController.sendMessage)
    app.get("/message/get/:id", authMiddleware, messageController.getMessage)
    app.get("/message/conversation/user", authMiddleware, messageController.getConversation)
}

export default messageRoutes