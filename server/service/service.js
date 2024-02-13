import { loginSchema, registerSchema } from '../utils/validator/validator.js';
import { generateRefreshToken, encryptPassword, generateAccessToken } from '../utils/auth/auth.js';
import bcrypt from 'bcrypt'

class Service {
    constructor(repo){
        this.repo = repo
    }
    
    register = async (userData) => {
        const { error } = registerSchema.validate(userData, {
            abortEarly: true
        });
        if(error) {
            throw new Error("cannot register")
        }
        const existingEmail = await this.repo.findByEmail(userData.email )
    
        if (existingEmail) {
            throw new Error("email already registered")
        }
    
        const existingUsername = await this.repo.findByUsername(userData.username)
    
        if (existingUsername) {
            throw new Error("Username already used")
        }

        if (userData.password !== userData.confPassword) {
            throw new Error("password isn't same")
        }
    
        userData.password = await encryptPassword(userData.password)
    
        const token = await accessToken({id: userData._id})
    
        await this.repo.add(userData)
        console.log(token)
    
        return token
    }
    
    login = async (userInput) => {
        const { error } = loginSchema.validate(userInput, {
            abortEarly: true
        })
    
        if(error) {
            throw new Error("cannot login")
        }
    
        const user = await this.repo.findByUsername(userInput.username)
        if(!user) {
            throw new Error("user not found")
        }
    
        const isPasswordValid = await bcrypt.compare(userInput.password, user.password)
        if(!isPasswordValid) {
            throw new Error("invalid password")
        }
        
        const accessToken = await generateAccessToken({id: user.id})

        const refreshToken = await generateRefreshToken({id: user.id})

        await this.repo.update(userInput.username, {user, refresh_token: refreshToken})
        
        return {refreshToken, accessToken}
    }
    
    getUser = async (username) => {
        const user = await this.repo.findByUsername(username.toLowerCase())
    
        if(!user) {
            throw new Error("user not found")
        }
    
        return { username: user.username, email: user.email}
    }
    
}




export default Service