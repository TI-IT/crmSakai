const express = require('express');

// const { save, getAll } = require('../../services/crm/directory/directory.service');
const { getAllDataGoogleJson } = require('../../services/crm/googleSheet/googleSheet.service');
const router = express.Router();

router.get('/getAllDataGoogle', async (req, res) => {
  const getData = await getAllDataGoogleJson('directory');
  const dataObject = {};
  const typeTransactionArray = [];
  const typeProductArray = [];
  getData.directory.map((obj) => {
    if (obj.typeTransaction) {
      typeTransactionArray.push({ name: obj.typeTransaction });
    }
    dataObject.typeTransaction = typeTransactionArray;
    if (obj.typeProduct) {
      typeProductArray.push({ name: obj.typeProduct });
    }
    dataObject.typeProduct = typeProductArray;
  });
  res.json({ ok: true, data: dataObject });
});

router.post('/addAllDataGoogle', async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    // await save(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

module.exports = router;
