const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Catalog');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Catalog = mongoose.model('catalog', schema);
module.exports = Catalog;
