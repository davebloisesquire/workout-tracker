const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Adding my routes
app.use(require("./routes/workoutRoutes"));
app.use(require("./routes/viewRoutes"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});