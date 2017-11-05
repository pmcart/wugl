var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
    name: String,
    id: String,
    city: String,
    long: String,
    lat: String,
});

module.exports = mongoose.model('LocationObject', LocationSchema);