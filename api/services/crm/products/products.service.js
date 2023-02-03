const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Products = require('../../../models/crm/Products');
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../../../data/getAllGoogle.json');
fs.readFile(filePath, function (err, data) {
  if (err) {
    connectData();
  }
});

async function save(data) {
  await dbConnect();

  const collection = mongoose.model('products');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('products');
  const data = await collection.find({});
  return data;
}

function saveData(data) {
  fs.writeFile('./data/getAllGoogle.json', JSON.stringify(data.products), (err) => {
    if (err) console.log('Error');
  });
}

async function getAllGoogleSheeds() {
  let url =
    'https://script.google.com/macros/s/AKfycbzpzwWIeC6VXM6raZBB8YL08kRZpM2goz3UpKb_x4GLBnhygNroVbDKrQxb0A0feEb8/exec?products=all';
  const data = fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  return data;
}
async function connectData() {
  const data = await getAllGoogleSheeds();
  saveData(data);
}

async function getAllDataGoogleJson() {
  data = require('../../../data/getAllGoogle.json');
  return data;
}

async function updateAllDataGoogle() {
  const data = await getAllGoogleSheeds();
  return data;
}

module.exports = {
  save,
  getAll,
  getAllDataGoogleJson,
  updateAllDataGoogle,
};
