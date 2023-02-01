const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('FinishingProduct');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const FinishingProduct = mongoose.model('finishingProduct', schema);
module.exports = FinishingProduct;
