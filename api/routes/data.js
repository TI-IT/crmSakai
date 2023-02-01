const express = require('express');
const router = express.Router();
const { Data } = require('../data');

router.get('/', (req, res) => {
  res.send('Data');
});

router.get('/getAllData', async (req, res) => {
  res.json({ ok: true, data: Data });
});

module.exports = router;
