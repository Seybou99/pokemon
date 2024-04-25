const express = require('express');
const router = express.Router();
const pokemonRoutes = require('./routes/pokemonRoutes');
const userRoutes = require('./routes/userRoutes');

router.get('/', (req, res) => {
    res.send('welcom to the api');
});

router.use('/pokemons', pokemonRoutes);
router.use('/users', userRoutes);



module.exports = router;