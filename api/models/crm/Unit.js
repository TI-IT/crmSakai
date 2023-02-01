const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Unit');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Unit = mongoose.model('unit', schema);
module.exports = Unit;
