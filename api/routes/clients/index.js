const express = require('express');
const { save, getAll } = require('../../services/crm/clients/clients.service');
const {
  getAllDataGoogleJson,
  updateAllDataGoogle,
} = require('../../services/crm/googleSheet/googleSheet.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ ok: true, clients: 'clients' });
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

router.get('/getAll', async (req, res) => {
  const clients = await getAll();
  res.json({ ok: true, clients: clients });
});

router.get('/getAllDataGoogle', async (req, res) => {
  const data = await getAllDataGoogleJson('clients');
  res.json({ ok: true, data: data.clients });
});

router.get('/updateAllDataGoogle', async (req, res) => {
  const data = await updateAllDataGoogle('clients');
  res.json({ ok: true, data: data.clients });
});
module.exports = router;
