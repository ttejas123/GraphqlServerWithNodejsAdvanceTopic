const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    count: {
        type: Number
    },
    category: {
        type: String
    },
    subcat: {
        type: String
    },
    type: {
        type: String
    }
})

const model = mongoose.model('backpacks', schema);

module.exports = model