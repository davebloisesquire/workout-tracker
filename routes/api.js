const router = require('express').Router();
const Workout = require('../models/Workout');

// GET range of 7 days
router.get('/api/workouts/range', (req, res) => {
    Workout.find({
            day: { $gte: new Date(new Date().setDate(new Date().getDate() - 8)) }
        })
        .then(dbWorkoutRange => res.json(dbWorkoutRange))
        .catch(error => res.json(error))
})

// GET last workout (or at least get workout by id)
router.get('/api/workouts/:id', (req, res) => {
    Workout.findById(req.params.id)
        .then(dbWorkout => res.json(dbWorkout))
        .catch(error => res.json(error))
})

// GET all workouts (just because)
router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(dbWorkout => res.json(dbWorkout))
        .catch(error => res.json(error))
})

// POST new workout for createWorkout()
router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => res.json(dbWorkout))
        .catch(error => res.json(error))
})

// PUT in a workout update
router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, {
            $push: {
                exercises: body
            }
        })
        .then(dbWorkout => res.json(dbWorkout))
        .catch(error => res.json(error))
})

module.exports = router;
// Workout.find({ day: {} })