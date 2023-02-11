const express = require('express');

// const { save, getAll } = require('../../services/crm/directory/directory.service');
const { getAllDataGoogleJson } = require('../../services/crm/googleSheet/googleSheet.service');
const router = express.Router();

router.get('/getAllDataGoogle', async (req, res) => {
  const getData = await getAllDataGoogleJson('directory');
  const dataObject = {};
  const typeTransactionArray = [];
  const typeProductArray = [];
  const catalogArray = [];
  const categoryProductArray = [];
  const categoryChildrenProductArray = [];
  const finishingProductArray = [];
  const supplierProductArray = [];
  const unitArray = [];

  getData.directory.map((obj) => {
    if (obj.typeTransaction) {
      typeTransactionArray.push({ name: obj.typeTransaction });
    }
    dataObject.typeTransaction = typeTransactionArray;

    if (obj.typeProduct) {
      typeProductArray.push({ name: obj.typeProduct });
    }
    dataObject.typeProduct = typeProductArray;

    if (obj.catalog) {
      catalogArray.push({ name: obj.catalog });
    }
    dataObject.catalog = catalogArray;

    if (obj.categoryProduct) {
      categoryProductArray.push({ name: obj.categoryProduct });
    }
    dataObject.categoryProduct = categoryProductArray;

    if (obj.categoryChildrenProduct) {
      categoryChildrenProductArray.push({ name: obj.categoryChildrenProduct });
    }
    dataObject.categoryChildrenProduct = categoryChildrenProductArray;

    if (obj.finishingProduct) {
      finishingProductArray.push({ name: obj.finishingProduct });
    }
    dataObject.finishingProduct = finishingProductArray;

    if (obj.supplierProduct) {
      supplierProductArray.push({ name: obj.supplierProduct });
    }
    dataObject.supplierProduct = supplierProductArray;

    if (obj.unit) {
      unitArray.push({ name: obj.unit });
    }
    dataObject.unit = unitArray;
  });

  res.json({ ok: true, data: dataObject });
});

router.post('/addAllDataGoogle', async (req, res) => {
  const data = req.body;
  try {
    // await save(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

module.exports = router;
