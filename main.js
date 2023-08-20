const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const port = 3000;

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(request, response){
    response.redirect("/login");
});

app.route("/login").get(function(request, response){
    response.render("login");
}).post(function(request, response){
    const username = request.body.email;
    const password = request.body.password;
    console.log(`The username: ${username}\nThe password: ${password}`);
    response.redirect("login");
});

app.route("/register").get(function(request, response){
    response.render("register");
}).post(function(request, response){
    const username = request.body.email;
    const password = request.body.password;
    console.log(`The username: ${username}\nThe password: ${password}`);
    response.redirect("register");
});

app.route("/fpass").get(function(request, response){
    response.render("fpass");
}).post(function(request, response){
    const username = request.body.email;
    console.log(`Username: ${username}`);
    response.redirect("fpass");
});

app.listen(port, function(){
    console.log(`server has started on port ${port}`);
});