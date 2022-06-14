const { Router } = require('express');
const Character = require('../models/Character');
module.exports = Router()

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCharacter = await Character.getById(id);
    res.json(matchingCharacter);
  })

  .get('/', async (req, res) => {
    const charactersData = await Character.getAll();
    const characters = charactersData.map((character) => { return { id: character.id, first_name: character.first_name, last_name: character.last_name, quotes: character.quotes }; });
    res.json(characters);
  });
