const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: String,
    age: Number,
    nationality: String,
    bloodGroup: String,
    gender: String,
    profession: String,
    jobType: String,
    skills: [String]
})

const model = new mongoose.model("User", Schema);

module.exports = model