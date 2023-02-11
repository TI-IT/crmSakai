const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('TypeProduct');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const TypeProduct = mongoose.model('typeProduct', schema);
module.exports = TypeProduct;
