var express = require("express");
var app = express();

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/mydb');

var product = mongoose.model('Product', {name: String});
var prod = new product({name: "webstorm"});

app.get("/", function(req, res) {
    product.find(function(err, products) {
        res.send(products)
    })
})

app.listen(3000)