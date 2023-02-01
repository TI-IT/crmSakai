const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Markup');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Markup = mongoose.model('markup', schema);
module.exports = Markup;
