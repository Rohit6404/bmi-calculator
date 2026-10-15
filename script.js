
const form = document.querySelector("#bmi-form");
const htInp = document.querySelector("#height");
const wtInp = document.querySelector("#weight");
const res = document.querySelector("#result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const ht = Number(htInp.value);
    const wt = Number(wtInp.value);

    if (
        htInp.value.trim() === "" ||
        wtInp.value.trim() === "" ||
        !Number.isFinite(ht) ||
        !Number.isFinite(wt) ||
        ht <= 0 ||
        wt <= 0
    ) {
        res.textContent = "Please enter a valid height and weight.";
        return;
    }

    const heightInMeters = ht / 100;
    const bmi = wt / (heightInMeters * heightInMeters);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    res.textContent =
        `Your BMI is ${bmi.toFixed(2)} — ${category}`;
});
