const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/reviews_app", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Movie = require("./movie");
