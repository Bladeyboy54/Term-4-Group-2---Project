const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
    questioner: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        type: String
    },
    dateAsked: {
        type: Date,
        default: Date.now()
    },
    questionSource: {
        type: String,// Sourced from: Community or Personal
        default: "public",
        emum: ["community", "public"]
    },
    community: {
        id: {
            type: String
        },
        name: {
            type: String
        },

        category: {
            type: String
        }
    },
    title: {
        type: String,
        require: true
    },
    descriptionOfIssue: {
        type: String,
        require: true
    },
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
    },],
    code: {
        type: String
    },
    answers: [{
        type: String // Array of ids of answer objects
    }],
    upVotes: [{
        type: String // Array of ids of users
    }],
    downVotes: [{
        type: String // Array of ids of users
    }],
    topics: [{
        type: String // Array of ids of topics objects
    }]
});

// Auto find questionerer
QuestionSchema.pre(/^find/, function (next) {
    this.populate({
        path: "questioner",
        select: ""
    });
    next();
});

module.exports = mongoose.model("Question", QuestionSchema)