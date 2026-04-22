const showLogin = document.getElementById("ShowLogin");
const showSignup = document.getElementById("ShowSignup");

const loginForm = document.getElementById("LoginForm");
const signupForm = document.getElementById("SignupForm");

const message = document.getElementById("AuthMessage");

const loginBtn = document.getElementById("Login");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (loginBtn && currentUser) {
  loginBtn.textContent = "Logout";

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
  });
}


if (showLogin && showSignup) {
  showLogin.addEventListener("click", () => {
    loginForm.classList.remove("Hidden");
    signupForm.classList.add("Hidden");

    showLogin.classList.add("Btn1");
    showLogin.classList.remove("Btn2", "active");

    showSignup.classList.add("Btn2");
    showSignup.classList.remove("Btn1", "active");

    message.textContent = "";
  });

  showSignup.addEventListener("click", () => {
    signupForm.classList.remove("Hidden");
    loginForm.classList.add("Hidden");

    showSignup.classList.add("Btn1");
    showSignup.classList.remove("Btn2", "active");

    showLogin.classList.add("Btn2");
    showLogin.classList.remove("Btn1", "active");

    message.textContent = "";
  });
}


if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("SignupName").value.trim();
    const email = document.getElementById("SignupEmail").value.trim();
    const password = document.getElementById("SignupPassword").value;
    const confirmPassword = document.getElementById("SignupConfirmPassword").value;
    const role = document.getElementById("SignupRole").value;

    if (password !== confirmPassword) {
      message.textContent = "Passwords do not match!";
      message.style.color = "red";
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(u => u.email === email)) {
      message.textContent = "Email already exists!";
      message.style.color = "red";
      return;
    }

    users.push({ name, email, password, role });
    localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Account created successfully!";
    message.style.color = "green";

    signupForm.reset();
  });
}


if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("LoginEmail").value.trim();
    const password = document.getElementById("LoginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      message.textContent = "Invalid email or password!";
      message.style.color = "red";
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    message.textContent = "Login successful!";
    message.style.color = "green";

    setTimeout(() => {
      if (user.role === "student") {
        window.location.href = "student-dashboard.html";
      } else {
        window.location.href = "instructor-dashboard.html";
      }
    }, 800);
  });
}