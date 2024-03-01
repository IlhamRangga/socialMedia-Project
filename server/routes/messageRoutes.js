import authorization from "../middleware/middleware.js";

const messageRoutes = (app, messageController) => {
    app.post("/send:id", authorization, messageController.sendMessage)
}

export default messageRoutes