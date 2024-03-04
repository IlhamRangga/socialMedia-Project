import User from "../model/user.js";
import { Op } from "sequelize";

class UserRepository {
    add = async (req) => {
        return await User.create({
            id: req.id,
            username: req.userInput.username,
            password: req.userInput.password,
            email: req.userInput.email,
            refresh_token: req.refreshToken
        })
    }

    findByUsername = async(username) => {
        return await User.findOne({
            where: {
                username: username.toLowerCase()
            }
        })
    }

    findByRefreshToken = async(refreshToken) => {
        return await User.findOne({
            where: {
                refresh_token: refreshToken
            }
        })
    }

    findAllById = async (id) => {
        const datas =  await User.findAll({
            where: {
                id: {
                    [Op.in]: id
                }
            }
        })
        const user = datas.map(user => ({id: user.dataValues.id, username: user.dataValues.username, email: user.dataValues.email}))

        return user
    }

    findOneById = async (id) => {
        return await User.findOne({
            where: {
                id
            }
        })
    }

    findByEmail = async (email) => {
        return await User.findOne({
            where: {
                email
            }
        })
    }

    update = async (id, data) => {
        return await User.update(data, {
            where: {
                id 
            }
        })
    }

}

export default UserRepository