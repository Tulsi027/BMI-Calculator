const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv   = document.getElementById("result");
const calcBtn     = document.getElementById("calcBtn");
const resetBtn    = document.getElementById("resetBtn");

// Event listeners
calcBtn.addEventListener("click", calculateBMI);
resetBtn.addEventListener("click", resetForm);

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    resultDiv.textContent = "Please enter valid positive numbers.";
    return;
  }

  // BMI formula
  const heightM = heightCm / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(2);

  // Determine category
  let status = "";
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  resultDiv.textContent = `Your BMI is ${bmi} (${status})`;
}

function resetForm() {
  weightInput.value = "";
  heightInput.value = "";
  resultDiv.textContent = "";
  weightInput.focus();
}
