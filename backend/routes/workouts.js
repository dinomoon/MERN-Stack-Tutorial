const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'GET all workouts' });
});

router.get('/:id', (req, res) => {
  res.json({ msg: 'GET a single workouts' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'POST a workout' });
});

router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ msg: 'PATCH a workout' });
});

module.exports = router;
