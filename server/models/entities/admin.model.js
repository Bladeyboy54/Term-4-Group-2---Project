const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    fullName: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    dateJoined: {
        type: Date,
        default: Date.now()
    },
    profileImage: {
        type: String
    },
    role: {
        type: String,
        default: "admin"
    }
});

module.exports = mongoose.model("Admin", AdminSchema)