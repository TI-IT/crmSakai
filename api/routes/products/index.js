const express = require('express');
const fs = require('fs');
const path = require('path');
const {
  save,
  getAll,
  getProductsTypeProduct,
  getProductsTypeTransaction,
  getCatalog,
} = require('../../services/crm/products/products.service');
const { getAllDataGoogleJson } = require('../../services/crm/googleSheet/googleSheet.service');
const { getAllTreeSelectData } = require('../../services/crm/offer/treeSelectData.service');
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

router.post('/postProductsTypeTransaction', async (req, res) => {
  const select = req.body;
  try {
    const data = await getProductsTypeTransaction(select);
    res.json({ ok: true, data: data });
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
router.post('/postProductsCatalog', async (req, res) => {
  const select = req.body;
  try {
    const data = await getCatalog(select);
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

router.get('/getTreeSelectData', async (req, res) => {
  const data = await getAllTreeSelectData();
  res.json({ ok: true, data: data.products });
});

module.exports = router;
