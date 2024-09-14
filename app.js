const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cryptoController = require('./controller/cryptoController');
const donenv = require('dotenv')
donenv.config()

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
    cryptoController.fetchAndStoreData();
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

app.get('/api', cryptoController.getCryptoData);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    setInterval(cryptoController.fetchAndStoreData, 60000);
});

