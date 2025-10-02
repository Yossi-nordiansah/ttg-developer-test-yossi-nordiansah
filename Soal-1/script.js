function setupPasswordToggle(inputId, toggleId) {
  const pw = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);
  const icon = toggle.querySelector("img");

  toggle.addEventListener("click", () => {
    const isHidden = pw.type === "password";
    pw.type = isHidden ? "text" : "password";

    toggle.setAttribute("aria-pressed", String(isHidden));
    toggle.setAttribute(
      "aria-label",
      isHidden ? "Sembunyikan password" : "Tampilkan password"
    );
    toggle.setAttribute(
      "title",
      isHidden ? "Sembunyikan password" : "Tampilkan password"
    );

    icon.src = isHidden
      ? "/Soal-1/assets/icons/showPassword.svg"
      : "/Soal-1/assets/icons/hiddenPassword.svg";
    icon.alt = isHidden ? "Hide" : "Show";
  });
}

setupPasswordToggle("password", "toggle-password");
setupPasswordToggle("confirm-password", "toggle-confirm-password");

const form = document.getElementById("register-form");
const successMessage = document.getElementById("success-message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");

  // Email validation
  const emailInput = document.getElementById("email");
  const emailError = emailInput.closest(".input").querySelector(".error-message");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Format email tidak valid!";
    valid = false;
  }

  // Password validation
  const passwordInput = document.getElementById("password");
  const passwordError = passwordInput.closest(".input").querySelector(".error-message");
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password minimal 8 karakter!";
    valid = false;
  }

  // Confirm Password validation
  const confirmInput = document.getElementById("confirm-password");
  const confirmError = confirmInput.closest(".input").querySelector(".error-message");
  if (confirmInput.value !== passwordInput.value) {
    confirmError.textContent = "Konfirmasi password tidak cocok!";
    valid = false;
  }

  if (valid) {
    form.reset();
    successMessage.textContent = "Registrasi Berhasil";
    successMessage.classList.add("active");
  }
});
