const express = require('express');

const {
  save,
  getAll,
  getTypeProductSelect,
} = require('../../services/crm/typeProduct/typeProduct.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('typeProduct');
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

router.post('/addAllDataGoogle', async (req, res) => {
  const data = req.body;
  try {
    await save(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.post('/postTypeProductSelect', async (req, res) => {
  const select = req.body;
  try {
    const data = await getTypeProductSelect(select);
    res.json({ ok: true, data: data });
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
