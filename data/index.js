let FeaturedCourses = document.getElementById("CoursesGrid");

if (FeaturedCourses) {
  courses
    .filter(course => parseFloat(course.rating) >= 4.7)
    .forEach(course => {
      FeaturedCourses.innerHTML += createCourseCard(course);
    });
}