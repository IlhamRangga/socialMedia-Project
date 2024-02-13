import UserRepository from "../repository/impl/user-repo";
import { generateAccessToken, verify } from "../utils/auth/auth";

const refreshToken = async (req,res) => {
    try{
        const refreshToken = req.cookie.refreshToken
        if(!refreshToken) return res.send("refreshToken not found")
        const user = await UserRepository.findByRefreshToken(refreshToken)
        if(!user) return res.send("refreshToken invalid")
        verify(user, async () => {
            const accessToken = await generateAccessToken({_id: user.id})
            res.json({ accessToken})
        })
    }catch (error) {

    }
}