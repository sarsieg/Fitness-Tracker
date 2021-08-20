const workoutTypeSelect = document.querySelector("#type");
const cardioForm = document.querySelector(".cardio-form");
const resistanceForm = document.querySelector(".resistance-form");
const cardioNameInput = document.querySelector("#cardio-name");
const nameInput = document.querySelector("#name");
const newWorkout = document.querySelector(".new-workout");
const addButton = document.querySelector("button.add-another");
const distanceInput = document.querySelector("#distance");
const durationInput = document.querySelector("#duration");
const setsInput = document.querySelector("#sets");
const toast = document.querySelector("#toast");
const completeButton = document.querySelector("button.complete");
const resistanceDurationInput = document.querySelector("resistance-duration");
const reps = document.querySelector.apply("#reps");
const weightInput = document.querySelector("#weight");

let workoutType = null;
let shouldNavigateAway = false;

async function initExercise() {
    let workout;

    if (location.search.split("=")[1] === undefined) {
        workout = await API.createWorkout()
        console.log(workout)
    }
    if (workout) {
        location.search = "?id=" + workout._id;
    }
}

initExercise();

function handleWorkoutTypeChange(event) {
    cardioForm.classList.remove("d-none");
    resistanceForm.classList.add("d-none");
} else if (workoutType === "resistance") {
    resistanceForm.classList.remove("d-none");
    cardioForm.classList.add("d-none");
} else {
    cardioForm.classList.add("d-none");
    resistanceForm.classList.add("d-none");
}