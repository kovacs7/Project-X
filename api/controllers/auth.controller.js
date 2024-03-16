import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body
    const newUser = new User({ username, email, password })
    try {
        await newUser.save()
        res.status(201).json({ "message": "user created successfully" })
    } catch (err) {
        next(err)
    }

}