import { registerSchema } from '../utils/validator/validator.js';
import UserModel from '../repository/model/user.js';
import { generateToken, encryptPassword } from '../utils/auth/auth.js';
import UserRepository from '../repository/impl/user-repo.js';
import bcrypt from 'bcrypt'

const registerUser = async (userData) => {
    const { error } = registerSchema.validate(userData, {
        abortEarly: true
    });
    if(error) {
        throw new Error("cannot register")
    }
    const existingEmail = await UserModel.findOne({email: userData.email })

    if (existingEmail) {
        throw new Error("email already registered")
    }

    const existingUsername = await UserModel.findOne({username: userData.username})

    if (existingUsername) {
        throw new Error("Username already used")
    }

    userData.password = await encryptPassword(userData.password)

    const user = new UserRepository()

    const token = await generateToken({id: user._id})

    await user.add(userData)

    return token
}

const loginUser = async (userInput) => {
    console.log()
    const user = await UserModel.findOne({ username: userInput.username })
    if(!user) {
        throw new Error("user not found")
    }

    const isPasswordValid = await bcrypt.compare(userInput.password, user.password)
    if(!isPasswordValid) {
        throw new Error("invalid password")
    }

    const token = await generateToken({id: user._id})

    return token
}



export {
    registerUser,
    loginUser
}