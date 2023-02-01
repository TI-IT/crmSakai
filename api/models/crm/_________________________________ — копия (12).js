const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('CategoryChildrenProduct');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const CategoryChildrenProduct = mongoose.model('categoryChildrenProduct', schema);
module.exports = CategoryChildrenProduct;
