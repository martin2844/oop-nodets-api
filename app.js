"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var app = express_1["default"]();
var port = 8080; // default port to listen
// Configure Express to use EJS
app.set("views", path_1["default"].join(__dirname, "views"));
app.set("view engine", "ejs");
// define a route handler for the default home page
app.get("/", function (req, res) {
    // render the index template
    res.render("index");
});
// start the express server
app.listen(port, function () {
    // tslint:disable-next-line:no-console
    console.log("server started at http://localhost:" + port);
});
