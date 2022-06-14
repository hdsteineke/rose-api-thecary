const { Router } = require('express');
const Quote = require('../models/Quote');
module.exports = Router()

  .post('/', async (req, res, next) => {
    try {
      const quote = await Quote.insert(req.body);
      res.json(quote);
    } catch (error) {
      next(error);
    }
  })
  
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingQuote = await Quote.getById(id);
    res.json(matchingQuote);
  })

  .get('/', async (req, res) => {
    const quotesData = await Quote.getAll();
    const quotes = quotesData.map((quote) => { return { id: quote.id, detail: quote.detail, character_id: quote.character_id }; });
    res.json(quotes);
  });
