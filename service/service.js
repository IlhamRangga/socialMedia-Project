import { loginSchema, registerSchema, updateSchema } from '../utils/validator/validator.js';
import UserModel from '../repository/model/user.js';
import { generateToken, encryptPassword } from '../utils/auth/auth.js';
import UserRepository from '../repository/impl/user-repo.js';
import bcrypt from 'bcrypt'

const userRepo = new UserRepository()

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

    const token = await generateToken({id: userData._id})

    await userRepo.add(userData)

    return token
}

const loginUser = async (userInput) => {
    const { error } = loginSchema.validate(userInput, {
        abortEarly: true
    })

    if(error) {
        throw new Error("cannot login")
    }

    const user = await UserModel.findOne({ username: userInput.username })
    if(!user) {
        throw new Error("user not found")
    }

    const isPasswordValid = await bcrypt.compare(userInput.password, user.password)
    if(!isPasswordValid) {
        throw new Error("invalid password")
    }

    return await generateToken({id: user._id})
}

const getUser = async (username) => {
    const user = await userRepo.findByUsername(username)

    if(!user) {
        throw new Error("user not found")
    }

    return user
}

const updateUser = async (id, update) => {
    const { error } = updateSchema.validate(update, {
        abortEarly: true
    })

    if(error) {
        throw new Error("cannot update")
    }

    const user = await userRepo.findById(id)

    if(!user) {
        throw new Error("user not found")
    }

    if(update.password) {
        update.password = await encryptPassword(update.password)
    }

    const token = await generateToken({id: user._id})

    await userRepo.update(id, update)

    return token

}

const deleteUser = async (id) => {
    const user = await userRepo.findById(id)

    if(!user) {
        throw new Error("user not found")
    }

    return await userRepo.delete(id)
}



export {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
}