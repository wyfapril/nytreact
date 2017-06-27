var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
	title: {
    	type: String
    },
    date: {
    	type: Date
    },
    url: {
    	type: String
    }
});

var News = mongoose.model("News", NewsSchema);

module.exports = News;