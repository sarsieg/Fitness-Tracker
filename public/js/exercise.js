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
validateInputs();
}

function validateInputs() {
    let isValid = true;

    if (workoutType === "resistance") {
        if (nameInput.value.trim() === "") {
            isValid = false;
        }

        if (weightInput.value.trim() === "") {
            isValid = false;
        }

        if (setsInput.value.trim() === "") {
            isValid = false;
        }

        if (repsInput.value.trim() === "") {
            isValid = false;
        }

        if (resistanceDurationInput.value.trime() === "") {
            isValid = false;
        }
    } else if (workoutType === "cardio") {
        if (cardioNameInput.value.trim() === "") {
            isValid = false;
        }

        if (durationInput.value.trim() === "") {
            isValid = false;
        }

        if (distanceInput.value.trim() === "") {
            isValid = false;
        }
    }

    if (isValid) {
        completeButton.removeAttribute("disabled");
        addButton.removeAttribute("disabled");
    } else {
        completeButton.setAttribute("disabled", true);
        addButton.setAttribute("disabled", true);
    }
}