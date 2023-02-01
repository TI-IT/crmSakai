const express = require('express');

const { save, getAllProducts } = require('../../services/crm/products/products.service.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Products');
});

router.post('/add', async (req, res) => {
  const product = req.body;
  try {
    await save(product);

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.get('/get/all', async (req, res) => {
  const products = await getAllProducts();
  res.json({ ok: true, products: products });
});

module.exports = router;
