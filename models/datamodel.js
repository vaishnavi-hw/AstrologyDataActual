const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/astrologydata");
const dataSchema = mongoose.Schema({
    lagna: String,
    bhav: String,
    grah: String
})
module.exports = mongoose.model('data',dataSchema);