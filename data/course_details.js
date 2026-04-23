var jsonData = `
[
  {
    "id": "1",
    "title": "Web Development Fundamentals",
    "subtitle": "Build a strong foundation in modern web development and start creating real websites step by step.",
    "instructor": "Google",
    "category": "development",
    "level": "beginner",
    "price": "49.99",
    "rating": "4.8",
    "language": "english",
    "learningType": "course",
    "image": "../img/web.jpg",
    "description": "Learn the foundations of HTML, CSS, and JavaScript to build modern websites.",
    "infoParagraph1": "This course is designed for students who want to begin their journey in web development in a simple and practical way. It introduces the core building blocks of modern websites and explains how structure, style, and interaction work together to create real web pages.",
    "infoParagraph2": "Throughout the course, learners will gradually build confidence by working with essential frontend concepts and applying them in small practical examples. By the end, students will have a clearer understanding of how websites are created and how they can continue toward more advanced frontend topics.",
    "materials": [
      "Course syllabus PDF",
      "HTML and CSS practice files",
      "JavaScript code examples",
      "Mini project instructions"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Web Development",
      "videoUrl": "https://www.youtube.com/embed/UB1O30fR-EE",
      "description": "In this module, learners are introduced to the structure of websites and the role of HTML, CSS, and JavaScript. The goal is to build a clear first understanding of how the frontend of a website is organized and how different technologies work together."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "HTML Page Structure",
          "content": "This section explains the basic structure of an HTML page, including headings, paragraphs, images, links, and semantic page organization."
        },
        {
          "title": "CSS Styling Basics",
          "content": "This section focuses on colors, spacing, fonts, borders, and layout basics, helping learners understand how to improve the appearance of a page."
        },
        {
          "title": "Simple Interactivity with JavaScript",
          "content": "This section introduces basic JavaScript ideas such as variables, events, and changing page content when a user interacts with buttons or inputs."
        }
      ]
    },
    "notes": "This course is ideal for beginners who want to start web development from zero and build a practical foundation before moving to more advanced frontend topics."
  },
  {
    "id": "2",
    "title": "UI / UX Design Essentials",
    "subtitle": "Understand how to design digital products that are visually appealing, easy to use, and centered around the user experience.",
    "instructor": "Meta",
    "category": "design",
    "level": "beginner",
    "price": "59.99",
    "rating": "4.6",
    "language": "english",
    "learningType": "specialization",
    "image": "../img/UI_UX.png",
    "description": "Understand design thinking, wireframes, prototypes, and better user experiences.",
    "infoParagraph1": "This course introduces the main ideas behind user interface and user experience design in a simple and structured way. Students will learn why visual clarity, user needs, and interaction flow are important when building digital products.",
    "infoParagraph2": "It also helps learners understand how designers move from ideas to real screens by using research, wireframes, and prototypes. The course is especially useful for students who want to combine creativity with practical digital problem solving.",
    "materials": [
      "Design process slides",
      "Wireframing templates",
      "Prototype examples",
      "User testing checklist"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to UI / UX Design",
      "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      "description": "This module introduces design thinking and user-centered design. Learners begin understanding how digital interfaces are planned, how user needs are identified, and how design decisions affect the overall experience."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Design Thinking",
          "content": "This section explains how designers identify user problems, study needs, and generate ideas that can be turned into practical interface solutions."
        },
        {
          "title": "Wireframes",
          "content": "This section focuses on simple layout planning through wireframes and shows how page structure is organized before detailed visual design begins."
        },
        {
          "title": "Prototypes and Testing",
          "content": "This section explains how prototypes are used to simulate product interactions and how testing helps improve design before final implementation."
        }
      ]
    },
    "notes": "This course is suitable for students interested in web and app design who want a strong introduction to UI and UX fundamentals."
  },
  {
    "id": "3",
    "title": "Digital Marketing Strategy",
    "subtitle": "Explore the key ideas behind digital promotion, audience targeting, and campaign planning in a practical and simple way.",
    "instructor": "IBM",
    "category": "marketing",
    "level": "intermediate",
    "price": "39.99",
    "rating": "4.5",
    "language": "english",
    "learningType": "course",
    "image": "../img/marketing.jfif",
    "description": "Learn SEO, content planning, social media strategy, and campaign analysis.",
    "infoParagraph1": "This course helps learners understand the main ideas behind digital marketing and how businesses use online channels to reach people effectively. It introduces core topics such as audience targeting, campaign structure, and communication strategy.",
    "infoParagraph2": "Students will also see how marketing decisions are supported by data, content planning, and performance tracking. The course is practical and gives a clear view of how digital campaigns are created and evaluated in real settings.",
    "materials": [
      "Marketing strategy notes",
      "Campaign planning worksheet",
      "SEO checklist",
      "Performance tracking sheet"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Digital Marketing",
      "videoUrl": "https://www.youtube.com/embed/nU-IIXBWlS4",
      "description": "This module introduces the role of digital marketing, the importance of audience analysis, and the way businesses communicate their message through modern online platforms."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Target Audience",
          "content": "This section explains how marketers identify the right audience and why knowing user needs and interests improves campaign effectiveness."
        },
        {
          "title": "SEO Basics",
          "content": "This section introduces search engine optimization and explains how websites improve visibility and reach more users through search."
        },
        {
          "title": "Campaign Analysis",
          "content": "This section focuses on measuring results, tracking engagement, and using performance indicators to improve future campaigns."
        }
      ]
    },
    "notes": "This course is best for learners who already know the basics of online platforms and want to understand digital marketing more deeply."
  },
  {
    "id": "4",
    "title": "Business Analytics for Beginners",
    "subtitle": "Learn how to turn data into strong business decisions with practical analytics tools.",
    "instructor": "Harvard University",
    "category": "business",
    "level": "beginner",
    "price": "69.99",
    "rating": "4.9",
    "language": "english",
    "learningType": "professional_certificate",
    "image": "../img/business.jpg",
    "description": "Use data and reporting tools to support business decisions and performance tracking.",
    "infoParagraph1": "This course explains how analytics helps companies measure results, monitor trends, and use insights to solve business challenges.",
    "infoParagraph2": "Learners practice reading reports, using dashboards, and applying simple analytical methods to understand performance and growth opportunities.",
    "materials": [
      "Analytics workbook",
      "Dashboard templates",
      "Case study examples",
      "Reporting guide"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Business Analytics",
      "videoUrl": "https://www.youtube.com/embed/8kUo_ROF4DA",
      "description": "This module shows how analytics supports business planning and introduces the most important metrics used in reporting."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Data Visualization Basics",
          "content": "This section covers charts, dashboards, and visual design principles that help teams interpret information quickly."
        },
        {
          "title": "Metrics and KPIs",
          "content": "This section explains how to define key performance indicators and choose the best metrics for different business goals."
        },
        {
          "title": "Data-Driven Decision Making",
          "content": "This section focuses on using analytical evidence to support recommendations and improve business outcomes."
        }
      ]
    },
    "notes": "Ideal for learners who want to use business data more confidently and grow their analytical thinking."
  },
  {
    "id": "5",
    "title": "Cybersecurity Basics",
    "subtitle": "Protect systems, identify threats, and learn the fundamentals of digital security.",
    "instructor": "Microsoft",
    "category": "it-software",
    "level": "intermediate",
    "price": "54.99",
    "rating": "4.7",
    "language": "english",
    "learningType": "course",
    "image": "../img/cyber.jfif",
    "description": "Explore system safety, authentication, online threats, and secure digital practices.",
    "infoParagraph1": "This course introduces common cybersecurity threats and the measures used to protect networks, devices, and online accounts.",
    "infoParagraph2": "Students will learn practical security habits and the basic tools organizations use to reduce risk in digital environments.",
    "materials": [
      "Security checklist",
      "Threat intelligence notes",
      "Incident response template",
      "Lab exercises"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Cybersecurity",
      "videoUrl": "https://www.youtube.com/embed/O1S4p4e7A0c",
      "description": "This module explains why cybersecurity matters, the types of attackers, and the key defenses modern teams rely on."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Threat Landscapes",
          "content": "This section describes malware, phishing, social engineering, and the common tactics used by cybercriminals."
        },
        {
          "title": "Secure Authentication",
          "content": "This section covers passwords, multi-factor authentication, and best practices to keep accounts safe."
        },
        {
          "title": "Network Protection",
          "content": "This section focuses on firewalls, secure connections, and basic policies for keeping networks protected."
        }
      ]
    },
    "notes": "This course is great for learners who want a practical introduction to cybersecurity concepts and safe online behavior."
  },
  {
    "id": "6",
    "title": "Personal Productivity Mastery",
    "subtitle": "Build daily routines and habits that help you stay focused, organized, and productive.",
    "instructor": "Google",
    "category": "personal-development",
    "level": "beginner",
    "price": "29.99",
    "rating": "4.4",
    "language": "arabic",
    "learningType": "course",
    "image": "../img/productive.jpg",
    "description": "Improve planning, focus, daily routines, and practical productivity habits.",
    "infoParagraph1": "This course walks learners through reliable productivity methods and techniques for managing time, focus, and tasks more effectively.",
    "infoParagraph2": "It also shows how to build consistent habits, balance work and rest, and make steady progress toward personal goals.",
    "materials": [
      "Daily planner template",
      "Habit tracker",
      "Focus session guide",
      "Weekly review checklist"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Productivity",
      "videoUrl": "https://www.youtube.com/embed/1nDCaIotPXo",
      "description": "This module introduces the foundations of productivity, including planning, prioritization, and how to get started with better routines."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Time Management",
          "content": "This section explains practical techniques for organizing your day and keeping distractions under control."
        },
        {
          "title": "Goal Setting",
          "content": "This section covers how to set clear, achievable goals and break them into manageable steps."
        },
        {
          "title": "Building Productive Routines",
          "content": "This section helps learners create habits that support long-term focus and steady progress every day."
        }
      ]
    },
    "notes": "Perfect for learners who want to improve daily habits, planning skills, and overall personal productivity."
  },
  {
    "id": "7",
    "title": "Advanced JavaScript Concepts",
    "subtitle": "Dive deeper into modern JavaScript, asynchronous code, and advanced programming patterns.",
    "instructor": "Meta",
    "category": "development",
    "level": "advanced",
    "price": "79.99",
    "rating": "4.9",
    "language": "english",
    "learningType": "specialization",
    "image": "../img/java.jpg",
    "description": "Master advanced JavaScript topics like async code, modules, APIs, and closures.",
    "infoParagraph1": "This course targets developers who already know the basics and want to build more modern, efficient JavaScript applications.",
    "infoParagraph2": "Learners will explore practical patterns, advanced functions, and real browser APIs used in professional frontend development.",
    "materials": [
      "Code challenge exercises",
      "ES module guide",
      "Async programming notes",
      "Design pattern examples"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Advanced JavaScript Concepts",
      "videoUrl": "https://www.youtube.com/embed/PoRJizFvM7s",
      "description": "This module explains closures, advanced functions, modules, and the building blocks of sophisticated JavaScript code."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Async Programming",
          "content": "This section covers promises, async/await, and how to manage asynchronous behavior in JavaScript."
        },
        {
          "title": "Modern Browser APIs",
          "content": "This section introduces APIs like fetch, local storage, and client-side routing for richer web experiences."
        },
        {
          "title": "Design Patterns in JavaScript",
          "content": "This section covers reusable coding patterns that help maintain clean and scalable JavaScript applications."
        }
      ]
    },
    "notes": "Great for developers who want to go beyond beginner JavaScript and write more powerful, maintainable code."
  },
  {
    "id": "8",
    "title": "Healthy Lifestyle and Fitness",
    "subtitle": "Build stronger habits for exercise, nutrition, and mental balance.",
    "instructor": "IBM",
    "category": "health-fitness",
    "level": "beginner",
    "price": "24.99",
    "rating": "4.3",
    "language": "french",
    "learningType": "course",
    "image": "../img/health.jpg",
    "description": "Build better wellness habits with simple lessons on exercise, health, and balance.",
    "infoParagraph1": "This course introduces essential wellness strategies that are easy to follow and can fit into a busy schedule.",
    "infoParagraph2": "Learners will focus on balanced nutrition, realistic fitness planning, and small habits that support long-term health.",
    "materials": [
      "Wellness planner",
      "Nutrition basics guide",
      "Workout templates",
      "Progress tracking journal"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Healthy Living",
      "videoUrl": "https://www.youtube.com/embed/e8ufJOnTWfA",
      "description": "This module shows how balanced routines, good nutrition, and consistency contribute to lasting health."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Balanced Nutrition",
          "content": "This section explains how to choose meals that give energy, support recovery, and maintain a healthy weight."
        },
        {
          "title": "Exercise Planning",
          "content": "This section covers beginner-friendly workouts and how to create a weekly fitness routine."
        },
        {
          "title": "Mental Wellness Practices",
          "content": "This section introduces breathing exercises, stress reduction techniques, and habits for better focus."
        }
      ]
    },
    "notes": "Best for learners who want a gentle, clear introduction to healthier daily habits and fitness basics."
  },
  {
    "id": "9",
    "title": "Cloud Computing Essentials",
    "subtitle": "Learn how cloud services work and how to build reliable infrastructure in the cloud.",
    "instructor": "Microsoft",
    "category": "it-software",
    "level": "advanced",
    "price": "84.99",
    "rating": "4.8",
    "language": "english",
    "learningType": "professional_certificate",
    "image": "../img/cloud.jpg",
    "description": "Understand cloud services, deployment models, and practical infrastructure concepts.",
    "infoParagraph1": "This course explains the cloud computing foundations used by businesses to host applications and services at scale.",
    "infoParagraph2": "Students will learn about cloud delivery models, service categories, and the tradeoffs involved in architecture decisions.",
    "materials": [
      "Cloud glossary",
      "Architecture diagrams",
      "Deployment checklist",
      "Cost optimization guide"
    ],
    "module1": {
      "title": "Module 1",
      "videoTitle": "Introduction to Cloud Computing",
      "videoUrl": "https://www.youtube.com/embed/8rNQp-cNq_s",
      "description": "This module introduces core cloud concepts, service models, and the benefits of using cloud infrastructure."
    },
    "module2": {
      "title": "Module 2",
      "sections": [
        {
          "title": "Cloud Deployment Models",
          "content": "This section covers public, private, and hybrid clouds, and when to choose each option."
        },
        {
          "title": "Core Services Overview",
          "content": "This section explains compute, storage, networking, and platform services in cloud environments."
        },
        {
          "title": "Security and Cost Optimization",
          "content": "This section focuses on protecting cloud resources and managing cost-efficient deployments."
        }
      ]
    },
    "notes": "Great for learners who want to understand cloud technology and prepare for infrastructure-focused roles."
  }
]
`;

var courses = JSON.parse(jsonData);

let detailsHero = document.getElementById("DetailsHero");
let heroTitle = document.getElementById("HeroTitle");
let heroSubtitle = document.getElementById("HeroSubtitle");
let sidebarCourseImage = document.getElementById("SidebarCourseImage");
let sidebarCourseTitle = document.getElementById("SidebarCourseTitle");
let sidebarCourseInstructor = document.getElementById("SidebarCourseInstructor");
let sidebarMenu = document.getElementById("SidebarMenu");
let detailsContent = document.getElementById("DetailsContent");

let params = new URLSearchParams(window.location.search);
let courseId = params.get("id");

let selectedCourse = null;
let module1WatchedKey = "module1Watched_" + courseId;
let module1Watched = JSON.parse(localStorage.getItem(module1WatchedKey)) || false;


function formatText(text) {
  return text
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
}

function getSelectedCourse() {
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id === courseId) {
      selectedCourse = courses[i];
      break;
    }
  }
}

function renderHero() {
  heroTitle.textContent = selectedCourse.title;
  heroSubtitle.textContent = selectedCourse.subtitle;

  sidebarCourseImage.src = selectedCourse.image;
  sidebarCourseImage.alt = selectedCourse.title;
  sidebarCourseTitle.textContent = selectedCourse.title;
  sidebarCourseInstructor.textContent = selectedCourse.instructor;
}

function updateModule2State() {
  let module2Button = document.querySelector('.SidebarItem[data-section="module-2"]');

  if (!module2Button) {
    return;
  }

  if (module1Watched) {
    module2Button.disabled = false;
    module2Button.classList.remove("LockedItem");
    module2Button.textContent = "Module 2";
  } else {
    module2Button.disabled = true;
    module2Button.classList.add("LockedItem");
    module2Button.textContent = "Module 2 (Locked)";
  }
}

function renderInfo() {
  let html = `
    <h2 class="ContentSectionTitle">Course Info</h2>

    <div class="InfoGrid">
      <div class="InfoCard">
        <h4>Instructor</h4>
        <p>${selectedCourse.instructor}</p>
      </div>

      <div class="InfoCard">
        <h4>Category</h4>
        <p>${formatText(selectedCourse.category)}</p>
      </div>

      <div class="InfoCard">
        <h4>Level</h4>
        <p>${formatText(selectedCourse.level)}</p>
      </div>

      <div class="InfoCard">
        <h4>Language</h4>
        <p>${formatText(selectedCourse.language)}</p>
      </div>

      <div class="InfoCard">
        <h4>Learning Type</h4>
        <p>${formatText(selectedCourse.learningType)}</p>
      </div>

      <div class="InfoCard">
        <h4>Price</h4>
        <p>$${parseFloat(selectedCourse.price).toFixed(2)}</p>
      </div>
    </div>

    <p class="ContentParagraph">${selectedCourse.infoParagraph1}</p>
    <p class="ContentParagraph">${selectedCourse.infoParagraph2}</p>
  `;

  detailsContent.innerHTML = html;
}


function renderModule1() {
  let watchedButtonText = "Mark as Watched";

  if (module1Watched == true) {
    watchedButtonText = "Watched";
  }

  let html = "";
  html += "<h2 class='ContentSectionTitle'>" + selectedCourse.module1.title + "</h2>";
  html += "<div class='ModuleCard'>";
  html += "<h3>" + selectedCourse.module1.videoTitle + "</h3>";
  html += "<div class='VideoWrapper'>";
  html += "<iframe ";
  html += "src='" + selectedCourse.module1.videoUrl + "' ";
  html += "title='" + selectedCourse.module1.videoTitle + "' ";
  html += "frameborder='0' ";
  html += "allowfullscreen>";
  html += "</iframe>";
  html += "</div>";
  html += "<div class='ModuleActionRow'>";
  html += "<p class='ContentParagraph ModuleVideoText'>" + selectedCourse.module1.description + "</p>";
  html += "<button id='WatchedBtn' class='Btn Btn1' type='button'>" + watchedButtonText + "</button>";
  html += "</div>";
  html += "</div>";

  detailsContent.innerHTML = html;

  let watchedBtn = document.getElementById("WatchedBtn");

  if (watchedBtn != null) {
    watchedBtn.addEventListener("click", markModule1Watched);
  }
}

function renderModule2() {
  if (module1Watched == false) {
    detailsContent.innerHTML =
      "<div class='ModuleCard'>" +
      "<h2 class='ContentSectionTitle'>Module 2</h2>" +
      "<p class='ContentParagraph'>Module 2 is locked. Please watch Module 1 first, then press the watched button to unlock this section.</p>" +
      "</div>";
    return;
  }

  let html = "<h2 class='ContentSectionTitle'>" + selectedCourse.module2.title + "</h2>";
  html += "<div class='AccordionBlock'>";

  for (let i = 0; i < selectedCourse.module2.sections.length; i++) {
    html += "<div class='AccordionItem'>";
    html += "<button class='AccordionHeader' type='button' data-index='" + i + "'>";
    html += "<span>" + selectedCourse.module2.sections[i].title + "</span>";
    html += "<span class='AccordionArrow'>▼</span>";
    html += "</button>";
    html += "<div class='AccordionContent'>";
    html += "<p>" + selectedCourse.module2.sections[i].content + "</p>";
    html += "</div>";
    html += "</div>";
  }

  html += "</div>";

  detailsContent.innerHTML = html;

  attachAccordionEvents();
}

function markModule1Watched() {
  module1Watched = true;
  localStorage.setItem(module1WatchedKey, JSON.stringify(true));
  updateModule2State();
  renderModule1();
}

function attachAccordionEvents() {
  let accordionHeaders = document.querySelectorAll(".AccordionHeader");

  for (let i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].addEventListener("click", function () {
      let accordionItem = this.closest(".AccordionItem");
      let accordionContent = accordionItem.querySelector(".AccordionContent");
      let arrow = accordionItem.querySelector(".AccordionArrow");

      if (accordionContent.classList.contains("OpenAccordion")) {
        accordionContent.classList.remove("OpenAccordion");
        arrow.textContent = "▼";
      }
      else {
        accordionContent.classList.add("OpenAccordion");
        arrow.textContent = "▲";
      }
    });
  }
}

function renderNotFound() {
  detailsHero.style.backgroundImage = "none";
  heroTitle.textContent = "Course Not Found";
  heroSubtitle.textContent = "The course you are looking for does not exist or the link is not correct.";

  let html = "";
  html += "<div class='EmptyCourseState'>";
  html += "<h2>Course Not Found</h2>";
  html += "<p>We could not find the requested course details.</p>";
  html += "<a href='courses.html' class='Btn Btn1'>Back to Courses</a>";
  html += "</div>";

  detailsContent.innerHTML = html;
}
function renderNotes() {
  let html = "";
  html += "<h2 class='ContentSectionTitle'>Notes</h2>";
  html += "<div class='ModuleCard'>";
  html += "<p class='ContentParagraph'>" + selectedCourse.notes + "</p>";
  html += "</div>";

  detailsContent.innerHTML = html;
}

function renderSection(section) {
  if (section == "info") {
    renderInfo();
  }
  else if (section == "module-1") {
    renderModule1();
  }
  else if (section == "module-2") {
    renderModule2();
  }
  else if (section == "notes") {
    renderNotes();
  }
}

function setActiveSidebarItem(section) {
  let allItems = document.querySelectorAll(".SidebarItem");

  for (let i = 0; i < allItems.length; i++) {
    allItems[i].classList.remove("active");

    if (allItems[i].dataset.section == section) {
      allItems[i].classList.add("active");
    }
  }
}

function handleSidebarClick(event) {
  let clickedItem = event.target.closest(".SidebarItem");

  if (!clickedItem) {
    return;
  }

  if (clickedItem.disabled) {
    return;
  }

  let section = clickedItem.dataset.section;
  setActiveSidebarItem(section);
  renderSection(section);
}

function enrollInCourse(course) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    alert("Please log in to enroll in courses.");
    window.location.href = "auth.html";
    return;
  }

  if (!currentUser.enrolledCourses) {
    currentUser.enrolledCourses = [];
  }

  const alreadyEnrolled = currentUser.enrolledCourses.some(enrolled => enrolled.id === course.id);
  if (alreadyEnrolled) {
    alert("You are already enrolled in this course.");
    return;
  }

  const enrolledCourse = {
    id: course.id,
    title: course.title,
    instructor: course.instructor,
    image: course.image,
    progress: 0,
    hours: 10
  };

  currentUser.enrolledCourses.push(enrolledCourse);

  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userIndex = users.findIndex(u => u.email === currentUser.email);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
  }

  alert("Successfully enrolled in " + course.title + "!");

  let actionBtn = document.getElementById("EnrollBtn");
  if (actionBtn) {
    actionBtn.textContent = "Complete Course";
    actionBtn.className = "Btn Btn3";
    actionBtn.addEventListener("click", function() {
      completeCourse(course);
    });
  }
}

function completeCourse(course) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || !currentUser.enrolledCourses) {
    return;
  }


  const courseIndex = currentUser.enrolledCourses.findIndex(enrolled => enrolled.id === course.id);
  if (courseIndex === -1) {
    return;
  }


  if (!currentUser.completedCourses) {
    currentUser.completedCourses = [];
  }
  const completedCourse = {
    id: course.id,
    title: course.title,
    instructor: course.instructor,
    image: course.image,
    completedDate: new Date().toLocaleDateString()
  };

  currentUser.completedCourses.push(completedCourse);
  currentUser.enrolledCourses.splice(courseIndex, 1);

  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userIndex = users.findIndex(u => u.email === currentUser.email);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem("users", JSON.stringify(users));
  }

  alert("Congratulations! You have completed " + course.title + "!");
  window.location.href = "student-dashboard.html";
}





getSelectedCourse();

if (selectedCourse == null) {
  renderNotFound();
}
else {
  renderHero();
  updateModule2State();
  renderInfo();
  sidebarMenu.addEventListener("click", handleSidebarClick);
  let actionBtn = document.getElementById("EnrollBtn");
  if (actionBtn) {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const alreadyEnrolled = currentUser && currentUser.enrolledCourses && currentUser.enrolledCourses.some(enrolled => enrolled.id === selectedCourse.id);
  
    if (alreadyEnrolled) {
      actionBtn.textContent = "Complete Course";
      actionBtn.className = "Btn Btn3";
      actionBtn.addEventListener("click", function() {
        completeCourse(selectedCourse);
      });
    } else {
      actionBtn.addEventListener("click", function() {
        enrollInCourse(selectedCourse);
      });
    }
  }
}