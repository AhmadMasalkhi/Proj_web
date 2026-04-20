let FeaturedCourses = document.getElementById("CoursesGrid");

if (FeaturedCourses) {
    courses.forEach(course => {
        if(parseFloat(course.rating) >= 4.7){
            FeaturedCourses.innerHTML += createCourseCard(course);
        }
    });
}