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
}

export default UserRepository