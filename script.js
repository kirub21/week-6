// ==============================
// Part 1: Event Handling
// ==============================

// Click Event
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "You clicked the button!";
});

// Keyboard Input Event
const inputBox = document.getElementById("keyboardInput");
const liveText = document.getElementById("liveText");

inputBox.addEventListener("input", () => {
  liveText.textContent = `You typed: ${inputBox.value}`;
});

// ==============================
// Part 2: Interactive Elements
// ==============================

// Dark Mode Toggle
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// FAQ (Collapsible)
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  if (faqAnswer.style.display === "block") {
    faqAnswer.style.display = "none";
    faqQuestion.textContent = "What is JavaScript? ▼";
  } else {
    faqAnswer.style.display = "block";
    faqQuestion.textContent = "What is JavaScript? ▲";
  }
});

// ==============================
// Part 3: Form Validation
// ==============================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  // Grab fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  let isValid = true;

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  // Validate Name
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    isValid = false;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success
  if (isValid) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset();
  }
});
