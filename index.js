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
let a = 0;
let b = 0;
let c = 0;
let e = 0;
let d = 0;
let k = 0;
let z = 0
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

   })
}, 60000)