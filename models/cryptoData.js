const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
    name: String,
    last: Number,
    buy: Number,
    sell: Number,
    volume: Number,
    base_unit: String
});

module.exports = mongoose.model('CryptoData', cryptoDataSchema);