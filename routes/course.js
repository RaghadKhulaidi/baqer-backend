const express = require('express')
const router = express.Router()

const {
    createCourse, getCourse, getCourses, deleteCourse, updateCourse
} = require('../controllers/courseControllers')

// Get all workouts
router.get('/',getCourses)

// get single workout
router.get('/:id', getCourse)

// post a new workout
router.post('/', createCourse)

// delete a workout
router.delete('/:id', deleteCourse)

// update a workout
router.patch('/:id', updateCourse)

module.exports = router
