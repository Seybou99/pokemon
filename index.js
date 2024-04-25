const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


require('dotenv').config();

let app = express();
let port = 3000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('welcom to my backend');
});

app.use('/api', routes)
mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("connecté à la base de données");
    })
    .catch((err) => {
        console.log('erreur de connexion', err);
    })
app.listen(port, () => {
    console.log("server en ligne sur le port 3000");
});