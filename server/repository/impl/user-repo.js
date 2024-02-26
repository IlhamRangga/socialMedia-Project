import user from "../model/user.js";

class UserRepository {
    add = (req) => {
        const user = new UserModel({
            _id: req.id,
            username: req.userInput.username,
            password: req.userInput.password,
            email: req.userInput.email,
            refresh_token: req.refreshToken
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

    update = (id, data) => {
        return UserModel.updateOne({_id: id},data)
    }

}

export default UserRepository