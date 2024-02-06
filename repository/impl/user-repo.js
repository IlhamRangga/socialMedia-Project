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
            username
        })
    }

    findById = (id) => {
        return UserModel.findOne({
            _id: id
        })
    }

    update = (id, data) => {
        return UserModel.updateOne({_id: id},data)
    }

    delete = (id) => {
        return UserModel.deleteOne({_id: id})
    }
}

export default UserRepository