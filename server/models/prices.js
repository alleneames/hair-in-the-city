let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let priceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("prices", priceSchema);