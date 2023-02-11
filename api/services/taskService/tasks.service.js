const dbConnect = require('../dbConnect');
const mongoose = require('mongoose');
const Task = require('../../models/Tasks');
const { writeJson } = require('../jsFunctionsService/write.read.service');

async function writeTasks(data) {
  const writePath = 'tasks/tasks.json';
  const good = await writeJson(data, writePath);
}

module.exports = {
  writeTasks,
};
