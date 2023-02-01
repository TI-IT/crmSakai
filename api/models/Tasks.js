const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    // ID объекта
    id: {
      type: String,
    },
    // Если true, значит объект удален
    deleted: {
      type: Boolean,
    },
    // Название задачи
    title: {
      type: String,
    },
    // Время создания задачи
    timestamp: {
      type: Number,
    },
    // Id колонки родителя
    columnId: {
      type: String,
    },
    // Описание задачи
    description: {
      type: String,
    },
    // Задача перенесена в архив - да/нет
    archived: {
      type: Boolean,
    },
    // Задача выполнена - да/нет
    completed: {
      type: Boolean,
    },
    // Массив Id подзадач
    subtasks: {
      type: Array,
    },
    // Массив Id пользователей, на которых назначена задача
    assigned: {
      type: Array,
    },
    // Id пользователя, который создал задачу
    createdBy: {
      type: String,
    },
  },
  { autoCreate: true },
);

const Task = mongoose.model('tasks', schema);
module.exports = Task;
