const router = require('express').Router();
const path = require('path');

// Paths
const publicPathway = '../public/'
const home = publicPathway + 'index.html'
const exercise = publicPathway + 'exercise.html'
const stats = publicPathway + 'stats.html'

// Home Path
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, home))
});

// Exercise Path
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, exercise))
});

// Stats Path
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, stats))
});

module.exports = router;