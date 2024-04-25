const Pokemon = require("../models/pokemonModel");

exports.getAllPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find();
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
exports.getOnePokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        if (!pokemon) return res.status(404).json('Pokemon not found');
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
exports.createPokemons = async (req, res) => {
    try {
        const newPokemon = new Pokemon({
            name: req.body.name,
            hp: req.body.hp,
            cp: req.body.cp,
            picture: req.body.picture,
            types: req.body.types,
        });
        const savedPokemon = await newPokemon.save();
        res.status(201).json(savedPokemon);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
exports.editPokemons = async (req, res) => {
    try {
        // Récupérer l'identifiant du Pokémon à éditer
        const pokemon = req.params.id;

        // Vérifier si l'identifiant est valide
        if (!pokemon) {
            throw new Error("Identifiant du Pokémon manquant.");
        }

        // Rechercher le Pokémon dans la base de données
        const pokemonToUpdate = await Pokemon.findById(pokemon);

        // Vérifier si le Pokémon existe
        if (!pokemonToUpdate) {
            return res.status(404).json({ message: 'Pokemon not found' });
        }

        // Mettre à jour les données du Pokémon avec les nouvelles données fournies
        pokemonToUpdate.name = req.body.name || pokemonToUpdate.name;
        pokemonToUpdate.hp = req.body.hp || pokemonToUpdate.hp;
        pokemonToUpdate.cp = req.body.cp || pokemonToUpdate.cp;
        pokemonToUpdate.types = req.body.types || pokemonToUpdate.types;

        // Sauvegarder les modifications apportées au Pokémon
        const updatedPokemon = await pokemonToUpdate.save();

        // Retourner une réponse indiquant que la mise à jour a réussi
        res.status(200).json({ message: 'Mise à jour réussie', updatedPokemon });
    } catch (error) {
        // Retourner une réponse indiquant qu'une erreur s'est produite lors de la mise à jour du Pokémon
        res.status(500).json({ message: error.message });
    }

}
exports.deletePokemons = async (req, res) => {
    try {
        const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
        if (!pokemon) {
            return res.status(404).json({ message: 'Pokemon not found' });
        }
        res.status(200).json({ message: 'reussi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
