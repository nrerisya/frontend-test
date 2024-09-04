document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const inputs = form.querySelectorAll("input, textarea");
    const submitBtn = document.getElementById("submit-btn");
    const clearBtn = document.getElementById("clear-btn");

    // Add event listeners to all input fields and textarea
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            console.log(`Input changed: ${input.value}`);
            checkFormValidity();
        });
    });

    // Event listener for the Clear button
    clearBtn.addEventListener("click", function () {
        form.reset(); // Reset the form
        updateButtonState(false); // Disable the submit button and set color to grey
    });

    // Event listener for the form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Thank you! We will get in touch with you as soon as possible.");
        form.reset(); // Reset the form
        updateButtonState(false); // Disable the submit button and set color to grey
    });

    // Function to check if all fields are filled
    function checkFormValidity() {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== "");
        console.log(`Form valid: ${allFilled}`);
        updateButtonState(allFilled); // Update button state based on form validity
    }

    // Function to update the button state and color
    function updateButtonState(enabled) {
        if (enabled) {
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-disabled");
            submitBtn.classList.add("btn-enabled");
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove("btn-enabled");
            submitBtn.classList.add("btn-disabled");
        }
    }

    function toggleMenu() {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('show');
      }      

    // Initialize the button state on page load
    updateButtonState(false);
});
