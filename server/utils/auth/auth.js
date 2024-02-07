import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)

}

const generateToken = (_id) => {
    return jwt.sign(_id, process.env.JWT_SECRET, {
        expiresIn: 3600000,
    })
}

const verify = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

export {
    encryptPassword,
    generateToken,
    verify
}