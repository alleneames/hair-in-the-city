let express = require("express");
let pricesRouter = express.Router();

let Prices = require("../models/prices.js");

pricesRouter.route("/")
.get((req, res)=> {
    Prices.find(req.query, (err, data)=> {
        if(err) {
            res.status(500).send({"message" : "SERVER ERROR", err});
        } else {
            res.status(200).send({"message" : "SUCCESS", data});
        }
    })
})
.post((req,res)=> {
    let newPrices = new Prices(req.body);
    newPrices.save((err, data)=> {
        if(err) {
            res.status(500).send({"message" : "SERVER ERROR", err});
        } else {
            res.status(200).send({"message" : "SUCCESS", data});
        }
    })
});

pricesRouter.route("/:id")
.get((req, res)=> {
    Prices.findOne({"_id": req.params.id}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data === null) {
            res.status(404).send({"message": "DATA NOT FOUND", err});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})
.delete((req, res)=> {
    Prices.findByIdAndRemove(req.params.id, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data === null) {
            res.status(404).send({"message": "DATA NOT FOUND"});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    })
})
.put((req, res)=> {
    Prices.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data)=> {
        if(err) {
            res.status(500).send({"message": "SERVER ERROR", err});
        } else if(data == null) {
            res.status(404).send({"message": "DATA NOT FOUND"});
        } else {
            res.status(200).send({"message": "SUCCESS", data});
        }
    } )
})


module.exports = pricesRouter;