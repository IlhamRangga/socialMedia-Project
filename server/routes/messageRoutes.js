import authorization from "../middleware/middleware.js";

const messageRoutes = (app, messageController) => {
    app.post("/send/:id", authorization, messageController.sendMessage)
    app.get("/get/:id", authorization, messageController.getMessage)
    app.get("/chat/user", authorization, messageController.getUserWeChat)
}

export default messageRoutes