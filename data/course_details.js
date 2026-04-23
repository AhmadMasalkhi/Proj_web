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
  detailsHero.style.backgroundImage = 'url("' + selectedCourse.image + '")';

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

function renderMaterials() {
  let html = "<h2 class='ContentSectionTitle'>Course Materials</h2>";
  html += "<div class='ListBlock'>";

  for (let i = 0; i < selectedCourse.materials.length; i++) {
    html += "<div class='ListItem'>";
    html += "<h4>Material " + (i + 1) + "</h4>";
    html += "<p>" + selectedCourse.materials[i] + "</p>";
    html += "</div>";
  }

  html += "</div>";

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
  else if (section == "materials") {
    renderMaterials();
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

getSelectedCourse();

if (selectedCourse == null) {
  renderNotFound();
}
else {
  renderHero();
  updateModule2State();
  renderInfo();
  sidebarMenu.addEventListener("click", handleSidebarClick);
}