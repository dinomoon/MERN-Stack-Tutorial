const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require('../controllers/workout');

const router = express.Router();

router.get('/', getWorkouts);

router.get('/:id', getWorkout);

router.post('/', createWorkout);

router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE a workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ msg: 'PATCH a workout' });
});

module.exports = router;
