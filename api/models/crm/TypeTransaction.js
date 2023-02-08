const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('TypeTransaction');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const TypeTransaction = mongoose.model('typeTransaction', schema);
module.exports = TypeTransaction;
