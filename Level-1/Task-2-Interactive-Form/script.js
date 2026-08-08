// ========================================
// GET FORM ELEMENTS
// ========================================

const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const successMessage = document.getElementById("successMessage");


// ========================================
// SHOW ERROR
// ========================================

function showError(input, errorElement, message) {

    input.classList.add("invalid");
    input.classList.remove("valid");

    errorElement.textContent = message;
}


// ========================================
// SHOW SUCCESS
// ========================================

function showSuccess(input, errorElement) {

    input.classList.remove("invalid");
    input.classList.add("valid");

    errorElement.textContent = "";
}


// ========================================
// VALIDATE NAME
// ========================================

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        showError(
            nameInput,
            nameError,
            "Please enter your full name."
        );

        return false;
    }

    if (name.length < 2) {

        showError(
            nameInput,
            nameError,
            "Name must contain at least 2 characters."
        );

        return false;
    }

    showSuccess(nameInput, nameError);

    return true;
}


// ========================================
// VALIDATE EMAIL
// ========================================

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Please enter your email address."
        );

        return false;
    }

    if (!emailPattern.test(email)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;
    }

    showSuccess(emailInput, emailError);

    return true;
}


// ========================================
// VALIDATE PHONE
// ========================================

function validatePhone() {

    const phone = phoneInput.value.trim();

    const phonePattern =
        /^[0-9]{10}$/;

    if (phone === "") {

        showError(
            phoneInput,
            phoneError,
            "Please enter your phone number."
        );

        return false;
    }

    if (!phonePattern.test(phone)) {

        showError(
            phoneInput,
            phoneError,
            "Phone number must contain exactly 10 digits."
        );

        return false;
    }

    showSuccess(phoneInput, phoneError);

    return true;
}


// ========================================
// VALIDATE PASSWORD
// ========================================

function validatePassword() {

    const password = passwordInput.value;

    if (password === "") {

        showError(
            passwordInput,
            passwordError,
            "Please create a password."
        );

        return false;
    }

    if (password.length < 8) {

        showError(
            passwordInput,
            passwordError,
            "Password must contain at least 8 characters."
        );

        return false;
    }

    if (!/[A-Z]/.test(password)) {

        showError(
            passwordInput,
            passwordError,
            "Password must contain at least one uppercase letter."
        );

        return false;
    }

    if (!/[0-9]/.test(password)) {

        showError(
            passwordInput,
            passwordError,
            "Password must contain at least one number."
        );

        return false;
    }

    showSuccess(passwordInput, passwordError);

    return true;
}


// ========================================
// PASSWORD STRENGTH
// ========================================

function updatePasswordStrength() {

    const password = passwordInput.value;

    let strength = 0;

    // Reset previous strength class
    strengthBar.className = "";

    // Empty password
    if (password.length === 0) {

        strengthBar.style.width = "0%";
        strengthText.textContent = "";

        return;
    }


    // Length
    if (password.length >= 8) {
        strength++;
    }

    // Uppercase
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    // Number
    if (/[0-9]/.test(password)) {
        strength++;
    }

    // Special character
    if (/[^A-Za-z0-9]/.test(password)) {
        strength++;
    }


    // Weak
    if (strength <= 1) {

        strengthBar.style.width = "25%";
        strengthBar.classList.add("weak");

        strengthText.textContent = "Weak";

    }

    // Fair
    else if (strength === 2) {

        strengthBar.style.width = "50%";
        strengthBar.classList.add("fair");

        strengthText.textContent = "Fair";

    }

    // Good
    else if (strength === 3) {

        strengthBar.style.width = "75%";
        strengthBar.classList.add("good");

        strengthText.textContent = "Good";

    }

    // Strong
    else {

        strengthBar.style.width = "100%";
        strengthBar.classList.add("strong");

        strengthText.textContent = "Strong";
    }
}


// ========================================
// SHOW / HIDE PASSWORD
// ========================================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );
    }
});


// ========================================
// PASSWORD INPUT EVENT
// ========================================

passwordInput.addEventListener(
    "input",
    updatePasswordStrength
);


// ========================================
// FOCUS / BLUR EVENTS
// ========================================

nameInput.addEventListener(
    "blur",
    validateName
);

emailInput.addEventListener(
    "blur",
    validateEmail
);

phoneInput.addEventListener(
    "blur",
    validatePhone
);

passwordInput.addEventListener(
    "blur",
    validatePassword
);


// ========================================
// FORM SUBMISSION
// ========================================

form.addEventListener("submit", function (event) {

    // Prevent browser page reload
    event.preventDefault();

    // Validate every field
    const nameValid = validateName();
    const emailValid = validateEmail();
    const phoneValid = validatePhone();
    const passwordValid = validatePassword();


    // Everything is valid
    if (
        nameValid &&
        emailValid &&
        phoneValid &&
        passwordValid
    ) {

        successMessage.textContent =
            "Form submitted successfully!";


        // Clear the form
        form.reset();


        // Remove validation styles
        nameInput.classList.remove("valid");
        emailInput.classList.remove("valid");
        phoneInput.classList.remove("valid");
        passwordInput.classList.remove("valid");


        // Reset password strength
        strengthBar.style.width = "0%";
        strengthBar.className = "";

        strengthText.textContent = "";


        // Reset password visibility
        passwordInput.type = "password";

        togglePassword.textContent = "Show";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );

    } else {

        successMessage.textContent = "";
    }
});