const { default: mongoose } = require('mongoose');
const mangoose = require('mongoose');

const pokemonSchema = new mangoose.Schema(
    {
        name: {
            type: String,
            require: true,
            // unique: true,
        },
        hp: Number,
        cp: Number,
        picture: String,
        types: {
            type: String,
            enum: ['Feu', 'Eau', 'Plante', 'Acier', 'Combat', 'Dragon'],
        },
    },
    { timestamps: true }
);
const Pokemon = mongoose.model('Pokemon', pokemonSchema);
module.exports = Pokemon;