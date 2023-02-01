const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Organizations = require('../../../models/crm/Organizations');

async function saveOrganization(data) {
  await dbConnect();
  const collection = mongoose.model('organizations');
  await collection.create({
    name: data.name,
  });
}

async function getAllOrganizations() {
  await dbConnect();
  const collection = mongoose.model('organizations');
  const organizations = await collection.find({});
  return organizations;
}

module.exports = {
  saveOrganization,
  getAllOrganizations,
};
