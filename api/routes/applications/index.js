const express = require('express');
const { save, getAllClients } = require('../../services/crm/clients/clients.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ ok: true, clients: 'clients' });
});

router.post('/add', async (req, res) => {
  const client = req.body;
  try {
    // await save(client);

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.get('/get/all', async (req, res) => {
  // const clients = await getAllClients();
  res.json({ ok: true, products: clients });
});
module.exports = router;
