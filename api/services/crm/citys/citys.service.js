const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Citys = require('../../../models/crm/Citys');

async function saveCity(data) {
  await dbConnect();
  const collection = mongoose.model('citys');
  await collection.create({
    name: data.name,
  });
}

async function getAllCitys() {
  await dbConnect();
  const collection = mongoose.model('citys');
  const citys = await collection.find({});
  return citys;
}

module.exports = {
  saveCity,
  getAllCitys,
};
