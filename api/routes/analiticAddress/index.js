const express = require('express');

const {
  saveAnaliticAddress,
  getAnaliticAddress,
} = require('../../services/crm/analiticAddress/analiticAddress.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Products');
});

router.post('/addOneData', async (req, res) => {
  const data = req.body;
  try {
    await saveAnaliticAddress(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.get('/getAllData', async (req, res) => {
  const analiticAddress = await getAnaliticAddress();
  res.json({ ok: true, data: analiticAddress });
});

module.exports = router;
