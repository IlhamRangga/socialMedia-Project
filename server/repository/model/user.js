import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const User = new mongoose.Schema({
_id: {
    type: String,
},
username: {
    type: String,
},
password: {
    type: String,
},
email: {
    type: String,
},
refresh_token: {
    type: String,
}
})

const UserModel = mongoose.model("user", User)

export default UserModel