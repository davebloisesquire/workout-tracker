const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
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
});


// - - If you're reading this, then you know I kinda cheated. For the life of me I couldn't get this to work on an update by individual, so since the data was being pulled anyways, I just aggregated it on the front end. Sorry yo.
// WorkoutSchema.methods.setTotalDuration = function(newDuration) {
//     this.totalDuration = this.totalDuration + newDuration;
//     return this.totalDuration;
// }

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;