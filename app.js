import express from "express";
import connection from "./utils/mongoose/connection.js";
import {registerUser, loginUser} from "./service/service.js";

connection()
const app = express()
app.use(express.json())

app.post('/register', async (req,res) =>{
    try {
        await registerUser(req.body)
        res.send({
            status: "success,"
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.post('/login', async (req,res) => {
    try {
        await loginUser(req.body)
        res.send({
            status: "success"
        })
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})