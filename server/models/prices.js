let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let priceSchema = new Schema({
    mens: {
        type: Number,
        required: true
    },
    womens: {
        type: Number,
        required: true
    },
    partialHighlight: {
        type: Number,
        require: true
    },
    fullHighlight: {
        type: Number,
        required: true
    },
    fullColor: {
        type: Number,
        required: true
    },
    trim: {
        type: Number,
        required: true
    },
    deepCondition: {
        type: Number,
        required: true
    },
    rootRetouch: {
        type: Number,
        required: true
    },
    wax: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("prices", priceSchema);