import { loginSchema, registerSchema } from '../utils/validator/validator.js';
import { generateRefreshToken, encryptPassword, generateAccessToken } from '../utils/auth/auth.js';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import BaseError from '../utils/error/baseError.js';

class AuthService {
    constructor(repo){
        this.repo = repo
    }
    
    register = async (userInput) => {
        const { error } = registerSchema.validate(userInput, {
            abortEarly: true
        });
        if(error) {
            throw new BaseError(400,error.details[0].message)
        }
        const existingEmail = await this.repo.findByEmail(userInput.email )
    
        if (existingEmail) {
            throw new BaseError(401,"email already registered")
        }
    
        const existingUsername = await this.repo.findByUsername(userInput.username)
    
        if (existingUsername) {
            throw new BaseError(401,"Username already used")
        }

        if (userInput.password !== userInput.confPassword) {
            throw new BaseError(400,"password isn't matched")
        }
    
        userInput.password = await encryptPassword(userInput.password)

        const id = uuidv4()
    
        const accessToken = await generateAccessToken({id, username: userInput.username})
        
        const refreshToken = await generateRefreshToken({id, username: userInput.username})
        
        await this.repo.add({userInput, refreshToken, id})

        return {username: userInput.username,refreshToken, accessToken, id}
    }
    
    login = async (userInput) => {
        const { error } = loginSchema.validate(userInput, {
            abortEarly: true
        })
    
        if(error) {
            throw new BaseError(400,"cannot login")
        }
    
        const user = await this.repo.findByUsername(userInput.username)
        if(!user) {
            throw new BaseError(404,"user not found")
        }
    
        const isPasswordValid = await bcrypt.compare(userInput.password, user.password)
        if(!isPasswordValid) {
            throw new BaseError(401,"invalid password")
        }
        
        const accessToken = await generateAccessToken({id: user.id, username: userInput.username})

        const refreshToken = await generateRefreshToken({id: user.id, username: userInput.username})

        await this.repo.update(user.id, { refresh_token: refreshToken })
        return {username: user.username ,refreshToken, accessToken, id: user.id}
    }

    logout = async (token) => {
        const refreshToken = token

        if(!refreshToken) {
            throw new BaseError(500,"Token not found")
        }

        const user = await this.repo.findByRefreshToken(refreshToken)

        if(!user) {
            throw new BaseError(401,"Token invalid")
        }

        this.repo.update(user.id , { refresh_token: null })
    }
    
    getUser = async (username) => {

        const user = await this.repo.findByUsername(username.toLowerCase())
    
        if(!user) {
            throw new BaseError(404,"user not found")
        }
    
        return { username: user.username, email: user.email}
    }
    
}




export default AuthService