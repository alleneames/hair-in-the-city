let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");
let path = require("path");

let settings = require("./config/settings.js")

let pricesRouter = require("./routes/prices.js");

mongoose.connect(settings.db);

let app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use("/trentinthecity", pricesRouter);

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res)=> {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
})

app.listen(PORT, ()=> {
    console.log(`Starting server on port ${PORT}`);
})