const express = require('express');
const router = express.Router();
const { Data } = require('../data');
const { getParserHref } = require('../../services/parser/getHref');

router.get('/', (req, res) => {
  res.send('Data');
});

router.get('/getAllData', async (req, res) => {
  Products = getParserHref();
  res.json({ ok: true, data: Products });
});

module.exports = router;
