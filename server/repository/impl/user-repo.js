import User from "../model/user.js";
import { Op } from "sequelize";

class UserRepository {
    add = async (req) => {
        return await User.create({
            _id: req.id,
            username: req.userInput.username,
            password: req.userInput.password,
            email: req.userInput.email,
            refresh_token: req.refreshToken
        })
    }

    findByUsername = (username) => {
        return User.findOne({
            where: {
                username: username.toLowerCase()
            }
        })
    }

    findByRefreshToken = (refreshToken) => {
        return User.findOne({
            where: {
                refresh_token: refreshToken
            }
        })
    }

    findById = (id) => {
        return User.findOne({
            where: {
                _id: id
            }
        })
    }

    findByEmail = (email) => {
        return User.findOne({
            where: {
                email
            }
        })
    }

    update = (id, data) => {
        return User.update(data, {
            where: {
                id 
            }
        })
    }

}

export default UserRepository