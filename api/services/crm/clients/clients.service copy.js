const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Clients = require('../../../models/crm/Clients');

async function save(client) {
  await dbConnect();
  const collection = mongoose.model('clients');

  await collection.create({
    surname: client.surname,
    name: client.name,
    patronymic: client.patronymic,
    phone: client.phone,
    email: client.email,
    analiticAddress: client.analiticAddress,
    organizations: client.organizations,
    citys: client.citys,
    address: client.address,
    notes: client.notes,
  });
}

async function getAllClients() {
  await dbConnect();
  const collection = mongoose.model('clients');

  const clients = await collection.find({});
  return clients;
}

async function getClientByEmailAndPassword(client) {
  await dbConnect();
  const collection = mongoose.model('clients');

  const doc = await collection.findOne({ email: client.email, password: client.password });
  return doc;
}

async function getClientById(_id) {
  await dbConnect();
  const collection = mongoose.model('clients');
  const client = await collection.findOne({ _id: _id });
  return client;
}

async function updatClient(client) {
  await dbConnect();
  const collection = mongoose.model('clients');
  const doc = await collection.findOne({ _id: client._id });

  doc['clientname'] = client.clientname;

  console.log(doc);

  await doc.save();
  return doc;
}

module.exports = {
  save,
  getAllClients,
};
