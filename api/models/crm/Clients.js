const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Clients');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Clients = mongoose.model('clients', schema);
module.exports = Clients;
