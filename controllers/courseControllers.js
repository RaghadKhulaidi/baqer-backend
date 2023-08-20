const Course = require('../models/CoursesModel')
const mongoose = require('mongoose')


//get all courses
const getCourses = async(req,res) =>{
    const courses = await Course.find({}).sort({createdAt: -1})

    res.status(200).json(courses)
}

//get single course
const getCourse = async(req,res) =>{
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const course = await Course.findById(id)

    if(!course){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(course)
}

// create a new workout

const createCourse = async (req,res) => {
    const {img,title,description,status,PassedHour,TotalHour} = req.body

    // add document to database
    try{
        const course = await Course.create({img, title, description,status,PassedHour,TotalHour})
        res.status(200).json(course)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a workout

const deleteCourse = async (req,res) =>{
   console.log(req.params);
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const course = await Course.findOneAndDelete({_id: id})

    if(!course){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json({course})
}

// update a workout

const updateCourse = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const course = await Course.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!course){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(course)
}


module.exports = {
    getCourse,
    getCourses,
    deleteCourse,
    updateCourse,
    createCourse
}