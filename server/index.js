let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

let pricesRouter = require("./routes/prices.js");

mongoose.connect("mongodb://localhost:27017/hairinthecity");

let app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/hairinthecity", pricesRouter);

app.listen(PORT, ()=> {
    console.log(`Starting server on port ${PORT}`);
})