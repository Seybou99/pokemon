const express = require('express');
const router = express.Router();
const pokemonController= require('../controllers/pokemonController');


router.get('/', pokemonController.getAllPokemons)
router.get('/:id', pokemonController.getOnePokemon)

//Post pokemons
router.post('/', pokemonController.createPokemons)
// get ONE pokemeon
// router.get('/:id', (req, res) => {
//     res.send('get one pokemon');
// })
// Edit a pokemeon
router.put('/:id', pokemonController.editPokemons)

// delete,a pokemeon
router.delete('/:id', pokemonController.deletePokemons)
module.exports = router