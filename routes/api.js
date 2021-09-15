const Workout = require("../models/workout.js");

module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
        Workout.find()
            .then(data => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    });


    // creates workout 
    app.post("/api/workouts", function(req, res) {
        Workout.create({})
            .then(data =>
                res.json(data))
            .catch(err => {
                res.json(err)
            })
    });

    // gets the workouts within range
    router.get("/api/workouts/range", function(req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err);
            })
    });

    app.post("/api/workouts/range", function(req, res) {
        Workout.find()
            .then(data => {
                res.json(data)

            })
            .catch(err => {
                res.json(err)
            })
    });

    router.put("/api/workouts/:id", ({ params, body }, res) => {
        Workout.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch((err) => {
                res.json(err);
            })
    });
}