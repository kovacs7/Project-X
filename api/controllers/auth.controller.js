import User from "../models/user.model.js"

export const signup = async (req, res) => {
    const { username, email, password } = req.body
    const newUser = new User({ username, email, password })
    try {
        await newUser.save()
        res.status(201).json({ "message": "user created successfully" })
    } catch (err) {
        res.status(500).json(err.message)
    }

}