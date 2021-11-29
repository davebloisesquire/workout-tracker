const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "You need the exercise type."
        },
        name: {
            type: String,
            trim: true,
            required: "You need the exercise name."
        },
        duration: {
            type: Number,
            default: 0
        },
        weight: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            default: 0
        }
    }]
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;