// ----------------------------
// 🌙 Dark Mode Toggle
// ----------------------------
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ----------------------------
// 🎮 Counter Game
// ----------------------------
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

// ----------------------------
// ❓ FAQ Toggle
// ----------------------------
const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ----------------------------
// 📋 Form Validation
// ----------------------------
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  let valid = true;

  // Name validation (at least 3 characters)
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation (at least 6 characters, must contain number)
  const password = document.getElementById("password").value.trim();
  const passwordPattern = /^(?=.*[0-9]).{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent = "Password must be 6+ chars and contain a number.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
    signupForm.reset();
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix the errors above.";
  }
});
