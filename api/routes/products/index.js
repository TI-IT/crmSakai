const express = require('express');
const fs = require('fs');
const path = require('path');

const {
  save,
  getAll,
  getProductsTypeProduct,
} = require('../../services/crm/products/products.service');
const { getAllDataGoogleJson } = require('../../services/crm/googleSheet/googleSheet.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('products');
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

router.post('/addAllData', async (req, res) => {
  const client = req.body;
  try {
    await save(client);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.post('/postProductsTypeProduct', async (req, res) => {
  const select = req.body;
  try {
    const data = await getProductsTypeProduct(select);
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

router.get('/getAllDataGoogle', async (req, res) => {
  const data = await getAllDataGoogleJson('products');
  res.json({ ok: true, data: data.products });
});

module.exports = router;
