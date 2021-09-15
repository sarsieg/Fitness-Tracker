const Workout = require("../models/workout.js");
const router = express.Router();
const mongoose = require("mongoose");
const express = require("express");

// creates workout 
router.post("/api/workouts", ({ body }, res) => {
            Workout.create({})
                .then((dbWorkout => {
                        res.json(dbWorkout);
                    })
                    .catch(({ message }) => {
                        console.log(message);
                    });
                });

        router.put("/api/workouts/:id", ({ params, body }, res) => {
            console.log("PARAMS", body, params);

            Workout.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
                .then((dbWorkout) => {
                    res.json(dbWorkout);
                })
                .catch((err) => {
                    res.json(err);
                });
        });

        // gets the workouts within range
        router.get("/api/workouts/range", (req, res) => {
            Workout.find({})
                .limit(7)
                .then((dbWorkout) => {
                    res.json(dbWorkout);
                }).catch(err => {
                    res.json(err);
                });
        });

        router.get("/api/workouts", (req, res) => {
            Workout.find({})
                .then((dbWorkout) => {
                    res.json(dbWorkout);
                })
                .catch((err) => {
                    res.json(err);
                });
        });

        module.exports = router;