const { Router } = require('express');
const Episode = require('../models/Episode');
module.exports = Router()

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingEpisode = await Episode.getById(id);
    res.json(matchingEpisode);
  })

  .get('/', async (req, res) => {
    const episodesData = await Episode.getAll();
    const episodes = episodesData.map((episode) => { return { id: episode.id, title: episode.title, number: episode.number, season: episode.season, quotes: episode.quotes }; });
    res.json(episodes);
  });
