/* 1. express$B%b%8%e!<%k$r%m!<%I$7!"%$%s%9%?%s%92=$7$F(Bapp$B$KBeF~!#(B*/
var express = require("express");
var app = express();

/* 2. listen()$B%a%=%C%I$r<B9T$7$F(B3000$BHV%]!<%H$GBT$A<u$1!#(B*/
var server = app.listen(1337, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

