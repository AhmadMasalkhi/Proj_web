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

function getCheckedValues(name) {
  let checkedInputs = document.querySelectorAll(`input[name="${name}"]:checked`);
  let values = [];

 for (let i = 0; i < checkedInputs.length; i++) {
  values.push(checkedInputs[i].value);
}

  return values;
}

function formatText(text) {
  return text
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
}

function getVisibleCourses() {
  let query = searchQuery.value.trim().toLowerCase();

  let selectedCategories = getCheckedValues("category");
  let selectedLevels = getCheckedValues("level");
  let selectedEducators = getCheckedValues("educator");
  let selectedLearningTypes = getCheckedValues("learningType");
  let selectedLanguages = getCheckedValues("language");

  let result = courses.filter(function (course) {
    let matchesSearch =
      course.title.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query);

    let matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category);

    let matchesLevel =
      selectedLevels.length === 0 ||
      selectedLevels.includes(course.level);

    let matchesEducator =
      selectedEducators.length === 0 ||
      selectedEducators.includes(course.instructor.toLowerCase());

    let matchesLearningType =
      selectedLearningTypes.length === 0 ||
      selectedLearningTypes.includes(course.learningType);

    let matchesLanguage =
      selectedLanguages.length === 0 ||
      selectedLanguages.includes(course.language);

    let matchesSaved =
      !savedOnly.checked || savedCourseIds.includes(course.id);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesLevel &&
      matchesEducator &&
      matchesLearningType &&
      matchesLanguage &&
      matchesSaved
    );
  } );

  if (sortFilter.value === "title-asc") {
    result.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  } else if (sortFilter.value === "title-desc") {
    result.sort(function (a, b) {
      return b.title.localeCompare(a.title);
    });
  } else if (sortFilter.value === "price-asc") {
    result.sort(function (a, b) {
      return parseFloat(a.price) - parseFloat(b.price);
    });
  } else if (sortFilter.value === "price-desc") {
    result.sort(function (a, b) {
      return parseFloat(b.price) - parseFloat(a.price);
    });
  } else if (sortFilter.value === "rating-desc") {
    result.sort(function (a, b) {
      return parseFloat(b.rating) - parseFloat(a.rating);
    });
  } else {
    result.sort(function (a, b) {
      return parseInt(a.id) - parseInt(b.id);
    });
  }

  return result;
}



