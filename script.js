// Multi-step form with progress bar
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("multiStepForm");
    const prevBtns = form.getElementsByClassName("prevBtn");
    const nextBtns = form.getElementsByClassName("nextBtn");
    const progressBar = document.getElementById("progressBar");
    const fieldsets = form.getElementsByTagName("fieldset");
    let currentStep = 0;

    // Display current step
    function showStep(step) {
        fieldsets[step].style.display = "block";
        if (step === 0) {
            prevBtns[0].style.display = "none";
        } else {
            prevBtns[0].style.display = "inline";
        }
        if (step === fieldsets.length - 1) {
            nextBtns[0].style.display = "none";
        } else {
            nextBtns[0].style.display = "inline";
        }
        progressBar.style.width = ((step + 1) / fieldsets.length) * 100 + "%";
    }
    function goToPrevStep() {
        if (currentStep > 0) {
        fieldsets[currentStep].style.display = "none";
        currentStep--;
        showStep(currentStep);
        }
        }
        // Go to next step
function goToNextStep() {
    if (validateForm()) {
        fieldsets[currentStep].style.display = "none";
        currentStep++;
        showStep(currentStep);
    }
}

// Form validation
function validateForm() {
    // Add your validation logic here
    // You can return true if the form is valid, or false otherwise
    return true;
}

// Attach event listeners to previous and next buttons
prevBtns[0].addEventListener("click", goToPrevStep);
nextBtns[0].addEventListener("click", goToNextStep);

// Show the initial step
showStep(currentStep);
});