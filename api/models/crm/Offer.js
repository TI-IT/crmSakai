const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Offer');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Offer = mongoose.model('offer', schema);
module.exports = Offer;
