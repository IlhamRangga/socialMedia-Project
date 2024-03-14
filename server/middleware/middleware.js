import { verifyAccessToken } from "../utils/auth/auth.js";

const authorization = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    // console.log(token)
    if (!token) {
      return res.status(401).json({ error: "Token not found" });
    }

    if (!token.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Invalid token format" });
    }

    const accessToken = token.split(" ")[1];

    const user = verifyAccessToken(accessToken);

    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = user

    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default authorization;
