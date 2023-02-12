const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")
const validator = require('validator')

const userinfoSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    }
})

//static sign up method

userinfoSchema.statics.signUp = async function (email, password) {

    //validator
    if (!email || !password) {
        throw Error("All field must be filled")
    }
    if (!validator.isEmail(email)) {
        throw Error("Email is not valid")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Passwod not strong enough")
    }



    const exist = await this.findOne({ email })
    if (exist) {
        throw Error("Email already in use")
    }

    // Salt genration
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

    const UserPass = await this.create({ email, password: hash })
    return UserPass

}




// static login method

userinfoSchema.statics.logIn = async function (email, password) {
    if (!email || !password) {
        throw Error("All field must be filled")
    }
    const user = await this.findOne({ email })

    if (!user) {
        throw Error("incorrect user")
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect Password")
    }
    return user
}
module.exports = mongoose.model('Userinfo', userinfoSchema);