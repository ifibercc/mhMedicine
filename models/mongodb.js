var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/medicine');

exports.mongoose = mongoose;