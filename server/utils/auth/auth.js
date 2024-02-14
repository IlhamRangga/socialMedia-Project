import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)

}

const generateAccessToken = (_id) => {
    return jwt.sign(_id, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '30s',
    })
}

const generateRefreshToken = (_id) => {
    return jwt.sign(_id, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '1d'
    })
}

const verifyRefreshToken = (token) => {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
}

const verifyAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}

export {
    encryptPassword,
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    verifyAccessToken
}