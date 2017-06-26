// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");


//Set up for Express server/app
var app = express();

var PORT = process.env.PORT || 3000;

//run get calls to BARCHART api
// var Client = require('node-rest-client').Client;

//set up for the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main", }));
app.set("view engine", "handlebars");
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//the js file for the web page is in "public" folder
app.use(express.static('./public'));

app.get("/", function(req, res) {

    var hbsObject = {};
    res.render("frontpage", hbsObject);

});

app.get("/aboutme", function(req, res) {

    var hbsObject = {};
    res.render("aboutme", hbsObject);

});

app.get("/projects", function(req, res) {

    var hbsObject = {};
    res.render("projects", hbsObject);

});

app.get("/favorites", function(req, res) {

    var hbsObject = {};
    res.render("favorites", hbsObject);

});

app.get("/blog", function(req, res) {

    var hbsObject = {};
    res.render("blog", hbsObject);

});

// // Routes
// require("./routes/html-routes.js")(app);
// require("./routes/user-api-routes.js")(app);
// require("./routes/company-api-routes.js")(app);
// require("./routes/Twitter-api-routes.js")(app);
// require("./routes/barchart-api-routes.js")(app);

// set up to sync the sequelize models and start the express server/app

app.listen(PORT, function() {
    console.log('Server successfully connected on PORT %s', PORT);
});
