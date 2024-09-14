const axios = require('axios');
const CryptoData = require('../models/cryptoData');

exports.fetchAndStoreData = async () => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = Object.entries(response.data)
      .map(([key, value]) => ({
        name: key.toUpperCase(),
        last: parseFloat(value.last),
        buy: parseFloat(value.buy),
        sell: parseFloat(value.sell),
        volume: parseFloat(value.volume),
        base_unit: value.base_unit
      }))
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 10);

    await CryptoData.deleteMany({});
    const insertedData = await CryptoData.insertMany(tickers);
    console.log('Data fetched and stored successfully:', insertedData.length, 'records');
  } catch (error) {
    console.error('Error fetching and storing data:', error);
  }
};

exports.getCryptoData = async (req, res) => {
  try {
    const data = await CryptoData.find({}).sort({ volume: -1 }).limit(10);
    console.log('Fetched data from database:', JSON.stringify(data, null, 2));
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};