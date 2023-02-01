const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('SupplierProduct');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const SupplierProduct = mongoose.model('supplierProduct', schema);
module.exports = SupplierProduct;
