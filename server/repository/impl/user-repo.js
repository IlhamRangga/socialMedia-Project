import UserModel from "../model/user.js";

class UserRepository {
    add = (req) => {
        const user = new UserModel({
            username: req.username,
            password: req.password,
            email: req.email
        })

        return user.save()
    }

    findByUsername = (username) => {
        return UserModel.findOne({
            username: username.toLowerCase()
        })
    }

    findByRefreshToken = (refreshToken) => {
        return UserModel.findOne({
            refresh_token: refreshToken
        })
    }

    findById = (id) => {
        return UserModel.findOne({
            _id: id
        })
    }

    findByEmail = (email) => {
        return UserModel.findOne({email: email})
    }

    update = (username, data) => {
        return UserModel.updateOne({username: username},data)
    }

}

export default UserRepository