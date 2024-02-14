const tokenRoutes = (app, tokenController ) => {
    app.get("/token", tokenController.refreshToken)
}

export default tokenRoutes