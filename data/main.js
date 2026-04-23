const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const menuToggle = document.getElementById("MenuToggle");
const navLinks = document.getElementById("NavLinks");

function setupMenuToggle() {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("Visible");
  });
}

function setupAuthStatus() {
  const loginLink = document.getElementById("Login");

  if (currentUser) {
    loginLink.textContent = "Logout";
    loginLink.href = "#";

    loginLink.onclick = function (event) {
      event.preventDefault();
      localStorage.removeItem("currentUser");
      window.location.href = "index.html";
    };

  } else {
    loginLink.textContent = "Login";
    loginLink.href = "auth.html";
  }
}

setupMenuToggle();
setupAuthStatus();
highlightActiveNavLink();



