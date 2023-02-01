const express = require('express');
const { writeTasks } = require('../../services/taskService/tasks.service.js');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ ok: true, task: 'TASKS' });
});

router.get('/getalltasks', (req, res) => {
  const key = 'Bearer ' + process.env.YOUGILE_KEY;
  fetch('https://yougile.com/api-v2/tasks?includeDeleted=false&limit=1000&offset=0', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: key,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data) {
        writeTasks(data.content);
        res.json({ ok: true, tasks: data.content });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
