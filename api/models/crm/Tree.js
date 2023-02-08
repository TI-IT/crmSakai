const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ModelData } = require('../../data');
const ModelsObject = ModelData('Tree');
const schema = new mongoose.Schema(ModelsObject, { autoCreate: true });
const Tree = mongoose.model('tree', schema);
module.exports = Tree;
