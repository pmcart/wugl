var mongoose = require('mongoose');

var TagSchema = new mongoose.Schema({
    userID: String,
    id: String,
    locationID: String,
    date: String,
    countryID: String,
    regionID: String
}, { collection: 'TagObject' });

module.exports = mongoose.model('TagObject', TagSchema, 'TagObject');