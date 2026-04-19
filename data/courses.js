var jsonData = `
[
  {
    "id": "1",
    "title": "Web Development Fundamentals",
    "instructor": "Google",
    "category": "development",
    "level": "beginner",
    "price": "49.99",
    "rating": "4.8",
    "language": "english",
    "learningType": "course",
    "image": "../img/web.jpg",
    "description": "Learn the foundations of HTML, CSS, and JavaScript to build modern websites."
  },
  {
    "id": "2",
    "title": "UI / UX Design Essentials",
    "instructor": "Meta",
    "category": "design",
    "level": "beginner",
    "price": "59.99",
    "rating": "4.6",
    "language": "english",
    "learningType": "specialization",
    "image": "../img/UI_UX.png",
    "description": "Understand design thinking, wireframes, prototypes, and better user experiences."
  },
  {
    "id": "3",
    "title": "Digital Marketing Strategy",
    "instructor": "IBM",
    "category": "marketing",
    "level": "intermediate",
    "price": "39.99",
    "rating": "4.5",
    "language": "english",
    "learningType": "course",
    "image": "../img/marketing.jfif",
    "description": "Learn SEO, content planning, social media strategy, and campaign analysis."
  },
  {
    "id": "4",
    "title": "Business Analytics for Beginners",
    "instructor": "Harvard University",
    "category": "business",
    "level": "beginner",
    "price": "69.99",
    "rating": "4.9",
    "language": "english",
    "learningType": "professional_certificate",
    "image": "../img/business.jpg",
    "description": "Use data and reporting tools to support business decisions and performance tracking."
  },
  {
    "id": "5",
    "title": "Cybersecurity Basics",
    "instructor": "Microsoft",
    "category": "it-software",
    "level": "intermediate",
    "price": "54.99",
    "rating": "4.7",
    "language": "english",
    "learningType": "course",
    "image": "../img/cyber.jfif",
    "description": "Explore system safety, authentication, online threats, and secure digital practices."
  },
  {
    "id": "6",
    "title": "Personal Productivity Mastery",
    "instructor": "Google",
    "category": "personal-development",
    "level": "beginner",
    "price": "29.99",
    "rating": "4.4",
    "language": "arabic",
    "learningType": "course",
    "image": "../img/productive.jpg",
    "description": "Improve planning, focus, daily routines, and practical productivity habits."
  },
  {
    "id": "7",
    "title": "Advanced JavaScript Concepts",
    "instructor": "Meta",
    "category": "development",
    "level": "advanced",
    "price": "79.99",
    "rating": "4.9",
    "language": "english",
    "learningType": "specialization",
    "image": "../img/java.jpg",
    "description": "Master advanced JavaScript topics like async code, modules, APIs, and closures."
  },
  {
    "id": "8",
    "title": "Healthy Lifestyle and Fitness",
    "instructor": "IBM",
    "category": "health-fitness",
    "level": "beginner",
    "price": "24.99",
    "rating": "4.3",
    "language": "french",
    "learningType": "course",
    "image": "../img/health.jpg",
    "description": "Build better wellness habits with simple lessons on exercise, health, and balance."
  },
  {
    "id": "9",
    "title": "Cloud Computing Essentials",
    "instructor": "Microsoft",
    "category": "it-software",
    "level": "advanced",
    "price": "84.99",
    "rating": "4.8",
    "language": "english",
    "learningType": "professional_certificate",
    "image": "../img/cloud.jpg",
    "description": "Understand cloud services, deployment models, and practical infrastructure concepts."
  }
]
`;

var courses = JSON.parse(jsonData);

let savedCourseIds = JSON.parse(localStorage.getItem("savedCourses")) || [];

let coursesGrid = document.getElementById("CoursesGrid");
let coursesSummary = document.getElementById("CoursesSummary");
let searchQuery = document.getElementById("SearchQuery");
let sortFilter = document.getElementById("SortFilter");
let savedOnly = document.getElementById("SavedOnly");
let resetFilters = document.getElementById("ResetFilters");
let allFilterCheckboxes = document.querySelectorAll('.FilterGroup input[type="checkbox"]');
