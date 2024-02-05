import mongoose from "mongoose";

export default () => {
const connection = mongoose.connect("mongodb://127.0.0.1:27017/socialMedia", {
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