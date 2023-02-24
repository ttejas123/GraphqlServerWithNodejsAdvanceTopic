const mongoose = require('mongoose');

const QuotesSchema = new mongoose.Schema({
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    quote: String    
})

const model = new mongoose.model("Quote", QuotesSchema);
module.exports = model