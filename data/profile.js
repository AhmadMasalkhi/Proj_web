document.addEventListener("DOMContentLoaded", function () {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  let form = document.querySelector("form");
  let firstNameInput = document.getElementById("firstName");
  let lastNameInput = document.getElementById("lastName");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let profilePictureInput = document.getElementById("profilePicture");
  let nameDisplay = document.getElementById("studentName");
  let profileImage = document.querySelector(".ProfileImage");



  
  function loadUserData() {
    if (!currentUser) {
      return;
    }
    firstNameInput.value = currentUser.firstName || "";
    lastNameInput.value = currentUser.lastName || "";
    emailInput.value = currentUser.email || "";
    let displayName = "Student";
    if (currentUser.firstName && currentUser.lastName) {
      displayName = currentUser.firstName + " " + currentUser.lastName;
    } else if (currentUser.name) {
      displayName = currentUser.name;
    }
    nameDisplay.textContent = displayName;
    if (currentUser.profilePicture) {
      profileImage.src = currentUser.profilePicture;
    }
  }





  function handleImageChange(event) {
    let selectedFile = event.target.files[0];
    if (!selectedFile) {
      return;
    }
    let reader = new FileReader();
    reader.onload = function (loadEvent) {
      let imageData = loadEvent.target.result;
      profileImage.src = imageData;
      currentUser.profilePicture = imageData;
    };
    reader.readAsDataURL(selectedFile);
  }






  function validateForm() {
    if (!firstNameInput.value.trim()) {
      alert("First name required");
      return false;
    }
    if (!lastNameInput.value.trim()) {
      alert("Last name required");
      return false;
    }
    if (!emailInput.value.trim()) {
      alert("Email required");
      return false;
    }
    return true;
  }








  function saveUser(userData) {
    localStorage.setItem("currentUser", JSON.stringify(userData));
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email === currentUser.email) {
        allUsers[i] = userData;
        break;
      }
    }
    localStorage.setItem("users", JSON.stringify(allUsers));
    alert("Profile updated!");
    passwordInput.value = "";
  }




  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    let updatedUser = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      name: firstNameInput.value.trim() + " " + lastNameInput.value.trim()
    };
    if (currentUser.password) {
      updatedUser.password = currentUser.password;
    }
    if (currentUser.role) {
      updatedUser.role = currentUser.role;
    }
    if (currentUser.enrolledCourses) {
      updatedUser.enrolledCourses = currentUser.enrolledCourses;
    }
    if (currentUser.completedCourses) {
      updatedUser.completedCourses = currentUser.completedCourses;
    }
    if (currentUser.notifications) {
      updatedUser.notifications = currentUser.notifications;
    }
    if (passwordInput.value) {
      updatedUser.password = passwordInput.value;
    }
    if (currentUser.profilePicture) {
      updatedUser.profilePicture = currentUser.profilePicture;
    }
    saveUser(updatedUser);
  }
  form.addEventListener("submit", handleSubmit);
  profilePictureInput.addEventListener("change", handleImageChange);

  loadUserData();
});