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
