const fs = require('fs');
const path = require('path');

// fs.writeFile('one.txt', 'work', (err) => {
//   if (err) console.log('Error');
// });

// https://www.youtube.com/watch?v=ch02G5Arkd0&t=1181s
// Case 1. Записываем JSON файл

function writeJson(data, writePath) {
  fs.writeFile('./json_db/' + writePath, JSON.stringify(data), (err) => {
    if (err) console.log('Error');
  });
}

// Case2 . Читаем JSON файл -просто подключаем файл если существует
// const tasks = require('../../json_db/tasks/tasks.json');

module.exports = {
  writeJson,
};
