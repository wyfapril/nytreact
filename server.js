var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var News = require("./models/news");

const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

mongoose.connect("mongodb://dbuser:dbpassword@ds131742.mlab.com:31742/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function () {
    console.log("Mongoose connection successful.");
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// app.get("/api", function (req, res) {
// 	News.find({}).exec(function (err, doc) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.send(doc);
//         }
//     });
// });

//TODO: app.post
// app.post("/api", function (req, res) {

//     var clickID = req.body.clickID;
//     var clicks = parseInt(req.body.clicks);

//     // Note how this route utilizes the findOneAndUpdate function to update the clickCount
//     // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
//     // If included, Mongoose will create a new document matching the description if one is not found
//     Click.findOneAndUpdate({
//         clickID: clickID
//     }, {
//         $set: {
//             clicks: clicks
//         }
//     }, {upsert: true}).exec(function (err) {

//         if (err) {
//             console.log(err);
//         }
//         else {
//             res.send("Updated Click Count!");
//         }
//     });
// });


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});