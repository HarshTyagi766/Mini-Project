const Userinfo = require('../models/userModal')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" })
}


//login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Userinfo.logIn(email, password)
        //token
        const token = createToken(user._id)
        res.status(200).json({ email, token });
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

//signup user

const signUpUser = async (req, res) => {
    const { email, password, adharNo, panNo, contact } = req.body;

    try {
        const user = await Userinfo.signUp(email, password, adharNo, panNo, contact)
        //token

        const token = createToken(user._id)
        res.status(200).json({ email, token });
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports = { loginUser, signUpUser }