let bmiForm = document.querySelector("#bmi-form")
let h = document.querySelector("#height")
let w = document.querySelector("#weight")
let bmiValue = document.querySelector("#bmi-value")
let err = document.querySelector("#error-message")
let category = document.querySelector("#bmi-category")

bmiForm.addEventListener("submit", function(e){
    e.preventDefault();
    let ht = Number(h.value)
    console.log(ht)
    let weight = Number(w.value)
    console.log(weight)

    err.textContent = ""

    if(h.value.trim() == "" || w.value.trim() == "" || ht <= 0 || weight <= 0 || !Number.isFinite(ht) || !Number.isFinite(weight) ) {
        err.textContent = "Please enter a valid height and weight."
        bmiValue.textContent = "--";
        category.textContent = "Enter your details to begin";
        return ;
    }
    

    let heightInMeters = ht/100;

    let bmi = weight/(heightInMeters * heightInMeters);
    
    bmiValue.textContent = bmi.toFixed(2);

    if(bmi<18.5) {
        category.textContent = "Underweight";
    }
    if(bmi>=18.5 && bmi<25) {
        category.textContent = "Healthy weight";
    }
    if(bmi>=25 && bmi<30) {
        category.textContent = "Overweight";
    }
    if(bmi>=30) {
        category.textContent = "Obesity";
    }


})
