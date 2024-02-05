import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = "jwtsecret"

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)

}

const generateToken = (_id) => {
    return jwt.sign(_id, JWT_SECRET, {
        expiresIn: 3600000,
    })
}

const verify = (token) => {
    return jwt.verify(token, JWT_SECRET)
}

export {
    encryptPassword,
    generateToken,
    verify
}