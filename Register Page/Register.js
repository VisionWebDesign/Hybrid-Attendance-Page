document.addEventListener("DOMContentLoaded", function () {
  // Toggle password visibility
  document.getElementById("togglePw1").addEventListener("click", function () {
    const pw = document.getElementById("password");
    pw.type = pw.type === "password" ? "text" : "password";
  });
  document.getElementById("togglePw2").addEventListener("click", function () {
    const pw = document.getElementById("confirmPassword");
    pw.type = pw.type === "password" ? "text" : "password";
  });

  // Form submit
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    hideError();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const role = document.getElementById("role").value;

    if (!name || !email || !password || !confirmPassword || !role) {
      showError("Please fill in all fields.");
      return;
    }
    if (password.length < 3) {
      showError("Password must be at least 3 characters.");
      return;
    }
    if (password !== confirmPassword) {
      showError("Passwords do not match.");
      return;
    }

    // Show spinner
    document.getElementById("btnText").style.opacity = "0";
    document.getElementById("btnSpinner").style.display = "block";

    setTimeout(() => {
      document.getElementById("btnText").style.opacity = "1";
      document.getElementById("btnSpinner").style.display = "none";
      document.getElementById("successMsg").style.display = "flex";

      setTimeout(() => {
        window.location.href = "../Login-form/Login.html";
      }, 1800);
    }, 1200);
  });

  function showError(msg) {
    const err = document.getElementById("errorMsg");
    document.getElementById("errorText").textContent = msg;
    err.style.display = "flex";
  }
  function hideError() {
    document.getElementById("errorMsg").style.display = "none";
  }
});