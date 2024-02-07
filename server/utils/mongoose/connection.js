import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export default () => {
const connection = mongoose.connect(process.env.DB_URI, {
    connectTimeoutMS: 1000,
})

mongoose.connection.on("connected", () => {
    console.info("connecting to socialMedia database")
} )

mongoose.connection.on("reconnected", () => {
    console.info("reconnected to database social_media")
})

mongoose.connection.on("error", (err) => {
    console.error(`error while connecting to database: ${err}`)
    mongoose.disconnect()
})

return connection
}