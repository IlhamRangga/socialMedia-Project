import { loginSchema, registerSchema, updateSchema } from '../utils/validator/validator.js';
import { generateToken, encryptPassword } from '../utils/auth/auth.js';
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
    
        userData.password = await encryptPassword(userData.password)
    
        const token = await generateToken({id: userData._id})
    
        await this.repo.add(userData)
    
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
    
        return await generateToken({id: user._id})
    }
    
    getUser = async (username) => {
        const user = await this.repo.findByUsername(username.toLowerCase())
    
        if(!user) {
            throw new Error("user not found")
        }
    
        return { username: user.username, email: user.email}
    }
    
    updateUser = async (id, update) => {
        const { error } = updateSchema.validate(update, {
            abortEarly: true
        })
    
        if(error) {
            throw new Error("cannot update")
        }
    
        const user = await this.repo.findById(id)
    
        if(!user) {
            throw new Error("user not found")
        }
    
        if(update.password) {
            update.password = await encryptPassword(update.password)
        }
    
        const token = await generateToken({id: user._id})
    
        await this.repo.update(id, update)
    
        return token
    
    }
    
    deleteUser = async (id) => {
        const user = await this.repo.findById(id)
    
        if(!user) {
            throw new Error("user not found")
        }
    
        return await this.repo.delete(id)
    }
}




export default Service