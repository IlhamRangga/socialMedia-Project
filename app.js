import express from "express";
import connection from "./utils/mongoose/connection.js";
import {registerUser, loginUser, getUser, updateUser, deleteUser} from "./service/service.js";
import authorization from "./middleware/middleware.js";

connection()
const app = express()
app.use(express.json())

app.post('/register', async (req,res) =>{
    try {
        await registerUser(req.body)
        res.send({
            status: "success"
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.post('/login', async (req,res) => {
    try {
        const token = await loginUser(req.body)
        res.send({
            status: "success",
            token,
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.get("/" ,authorization, async (req,res) => {
    try {
        const user = await getUser(req.body.username)
        res.send({
            status: "success",
            user
        })
    } catch (error) {
        res.send({message: error.message})
    }
})

app.put("/update/:id",authorization, async (req,res) => {
    try {
        const token = await updateUser(req.params.id, req.body)
        res.send({
            status: "success",
            token
        })
    }catch (error) {
        res.send({message: error.message})
    }
})

app.delete("/delete/:id",authorization, async (req,res) => {
    try {
        await deleteUser(req.params.id)
        res.send({
            status: "success"
        })
    } catch (error) {
        res.send({message: error.message})
    }
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})