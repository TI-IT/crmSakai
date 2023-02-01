const express = require('express');

const {
  saveOrganization,
  getAllOrganizations,
} = require('../../services/crm/organizations/organizations.service');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Products');
});

router.post('/addOneData', async (req, res) => {
  const data = req.body;
  try {
    await saveOrganization(data);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.json({ ok: false });
  }
});

router.get('/getAllData', async (req, res) => {
  const organizations = await getAllOrganizations();
  res.json({ ok: true, data: organizations });
});

module.exports = router;
