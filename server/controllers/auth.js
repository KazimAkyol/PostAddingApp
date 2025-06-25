
const AuthSchema = require('../models/auth')
const jwt = require('jsonwebtoken')
const bcyrpt = require('bcryptjs')
const { json } = require('body-parser')


const register = async (req, res) => {
    try {
        const { username, password, email } = req.body

        const user = await AuthSchema.findOne(email)

        if (user) {
            return res.status(500).json({ msg: "There is already such a user!" })
        }

        if (password.length < 8) {
            return res.status(500).json({ msg: "Password must be at least 8 characters long and contain at least one special character and at least one uppercase character" })
        }

        const passwordHash = await bcyrpt.hash(password, 12)

        if (isEmail(email)) {
            return res.status(500).json({ msg: "Invalid email" })
        }

        const newUser = await AuthSchema.create({ username, email, password: passwordHash })

        const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: '10d' })

        res.status(201), json({
            status: "OK",
            newUser,
            token
        })

    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

// 00:26:49

const login = async (req, res) => {
    try {

    } catch (error) {

    }
}

function isEmail(emailAdress) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailAdress.match(regex))
        return true

    else
        return false
}

module.exports = { register, login }