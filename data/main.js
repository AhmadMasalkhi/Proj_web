const currentUser = JSON.parse(localStorage.getItem("currentUser"));
let menuToggle = document.getElementById("MenuToggle");
let navLinks = document.getElementById("NavLinks");
function setupMenuToggle() {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("Visible");
  });
}

function setupAuthStatus() {
  let loginLink = document.getElementById("Login");

  if (currentUser) {
    loginLink.textContent = "Logout";
    loginLink.href = "#";

    loginLink.onclick = function (event) {
      event.preventDefault();
      localStorage.removeItem("currentUser");
      window.location.href = window.location.pathname.includes("pages/") ? "../index.html" : "index.html";
    };

  } else {
    loginLink.textContent = "Login";
    loginLink.href = window.location.pathname.includes("pages/") ? "auth.html" : "pages/auth.html";
  }
}


function protectProfileLink() {
  let profileLink = document.getElementById("ProfileLink");
  if (!currentUser) {
    profileLink.classList.add("Hidden");
}
}

setupMenuToggle();
protectProfileLink();
setupAuthStatus();



