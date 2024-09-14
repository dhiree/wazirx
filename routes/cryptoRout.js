const express = require('express');
const { fetchAndStoreCryptoData } = require('../controllers/cryptoController');
const router = express.Router();

router.get('/fetch-crypto-data', fetchAndStoreCryptoData);

router.get('/cryptos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM cryptocurrencies');
        res.json(result.rows);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
