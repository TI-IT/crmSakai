const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Products');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Products = mongoose.model('products', schema);
module.exports = Products;
