const express = require('express');

const { getAllTreeSelectData } = require('../../services/crm/offer/treeSelectData.service');
const { save, getAll } = require('../../services/crm/offer/offer.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('offer');
});

router.post('/addOneData', async (req, res) => {
  const data = req.body;
  try {
    await save(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.get('/getAllData', async (req, res) => {
  const data = await getAll();
  res.json({ ok: true, data: data });
});

router.get('/getTreeSelectData', async (req, res) => {
  const data = await getAllTreeSelectData();
  res.json({ ok: true, data: data });
});

module.exports = router;
