var express = require("express");
var app = express();

app.use(express.static("prog2verj"));

app.get("/", function (req, res) {
   res.redirect("index.html");
});

app.listen(3000, function () {
   console.log("Example is running on port 3000");
});

var fs = require('fs');



var statistics = {};
let a = 10;
let b = 12;
let c = 50;
let e = 15;
let d = 25;
let k = 49;
let z = 13;
setInterval(function () {
   statistics.grass = a++;
   statistics.grassEater = b++;
   statistics.sunk = c++;
   statistics.amp = e++;
   statistics.shun = d++;
   statistics.bact = k++;
   statistics.predator = z++;
   
   fs.writeFile("statistics.jscon", JSON.stringify(statistics), function () {
      console.log("statics")
      console.log(statistics)

   })
}, 1000)