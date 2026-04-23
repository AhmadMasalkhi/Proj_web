document.addEventListener("DOMContentLoaded", function () {
  setupMenuToggle();
  protectProfileLink();
  setupAuthStatus();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  showUserInfo(currentUser);
  showEnrolledCourses();
  showCompletedCourses();
  showNotifications();
  showSummary();
});

function showUserInfo(user) {
  const sidebarName = document.getElementById("SidebarName");
  const studentEmail = document.getElementById("StudentEmail");
  if (!sidebarName || !studentEmail) return;

  let name = "Student";
  if (user.firstName && user.lastName) {
    name = user.firstName + " " + user.lastName;
  } else if (user.name) {
    name = user.name;
  }

  sidebarName.textContent = name;
  studentEmail.textContent = user.email;
}

function showEnrolledCourses() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const courses = currentUser && currentUser.enrolledCourses ? currentUser.enrolledCourses : [];
  const container = document.getElementById("EnrolledCourses");
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="EmptyState">
        <p>You haven't enrolled in any courses yet.</p>
        <a href="courses.html" class="Btn Btn1">Browse Courses</a>
      </div>
    `;
    return;
  }

  container.innerHTML = courses.map(course => {
    // Generate random progress for enrolled courses (10-90%)
    const progress = course.progress || Math.floor(Math.random() * 81) + 10;
    
    return `
    <div class="Card">
      <img src="${course.image}" alt="${course.title}" class="CardImage">
      <div class="CardContent">
        <h3 class="CardTitle">${course.title}</h3>
        <p class="CardText">Instructor: ${course.instructor}</p>
        <p class="CardText">Progress: ${progress}%</p>
        <div class="ProgressBar">
          <div class="ProgressFill" style="width: ${progress}%"></div>
        </div>
        <a href="course-details.html?id=${course.id}" class="Btn Btn2">Continue Learning</a>
      </div>
    </div>
  `}).join('');
}

function showCompletedCourses() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const courses = currentUser && currentUser.completedCourses ? currentUser.completedCourses : [];
  const container = document.getElementById("CompletedCourses");
  if (!container) return;

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="EmptyState">
        <p>You haven't completed any courses yet. Keep learning!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = courses.map(course => `
    <div class="Card">
      <img src="${course.image}" alt="${course.title}" class="CardImage">
      <div class="CardContent">
        <h3 class="CardTitle">${course.title}</h3>
        <p class="CardText">Instructor: ${course.instructor}</p>
        <p class="CardText">Completed on: ${course.completedDate}</p>
        <div class="CertificateBadge">
          <span class="Btn Btn1">✓ Completed</span>
        </div>
      </div>
    </div>
  `).join('');
}

function showNotifications() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const notifications = currentUser && currentUser.notifications ? currentUser.notifications : [];
  const container = document.getElementById("StudentNotifications");
  if (!container) return;

  if (notifications.length === 0) {
    container.innerHTML = `<li>No new notifications</li>`;
    return;
  }

  container.innerHTML = notifications.map(note => `
    <li>
      <strong>${note.title}</strong>
      <p>${note.message}</p>
      <small>${note.date}</small>
    </li>
  `).join('');
}

function showSummary() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const enrolledCourses = currentUser && currentUser.enrolledCourses ? currentUser.enrolledCourses : [];
  const completedCourses = currentUser && currentUser.completedCourses ? currentUser.completedCourses : [];
  
  const container = document.getElementById("StudentSummary");
  if (!container) return;

  const summary = {
    enrolledCourses: enrolledCourses.length,
    completedCourses: completedCourses.length,
    totalHours: enrolledCourses.reduce((sum, course) => sum + (course.hours || 0), 0),
    certificates: completedCourses.length
  };

  container.innerHTML = `
    <div class="SummaryCard">
      <h3>Enrolled Courses</h3>
      <p class="SummaryNumber">${summary.enrolledCourses}</p>
    </div>
    <div class="SummaryCard">
      <h3>Completed Courses</h3>
      <p class="SummaryNumber">${summary.completedCourses}</p>
    </div>
    <div class="SummaryCard">
      <h3>Learning Hours</h3>
      <p class="SummaryNumber">${summary.totalHours}h</p>
    </div>
    <div class="SummaryCard">
      <h3>Certificates</h3>
      <p class="SummaryNumber">${summary.certificates}</p>
    </div>
  `;
}