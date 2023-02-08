const express = require('express');

const { save, getAll } = require('../../services/crm/tree/tree.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('tree');
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

module.exports = router;
