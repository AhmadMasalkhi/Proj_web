let FeaturedCourses = document.getElementById("CoursesGrid");

function createCourseCard2(course) {
     let cardClass = "Card CourseCard";
  return `
    <div class="${cardClass}">
      <div class="CourseImageWrap">
        <img src="${course.image}" alt="${course.title}">
        <span class="CourseBadge">${formatText(course.level)}</span>
      </div>

      <div class="CardBody">
        <div class="CourseTopRow">
          <p class="CourseInstructor">${course.instructor}</p>
          <p class="CourseRating">⭐ ${course.rating}</p>
        </div>

        <h3 class="CardTitle">${course.title}</h3>

        <p class="CourseMetaLine">
          ${formatText(course.category)} • ${formatText(course.language)} • ${formatText(course.learningType)}
        </p>

        <p class="CourseDesc">${course.description}</p>

        <div class="CourseBottom">
          <p class="CoursePrice">$${parseFloat(course.price).toFixed(2)}</p>

          <div class="CourseActions">
            <a href="course-details.html?id=${course.id}" class="Btn CourseBtn">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

if (FeaturedCourses) {
    courses.forEach(course => {
        if(parseFloat(course.rating) >= 4.8){
            FeaturedCourses.innerHTML += createCourseCard2(course);
        }
    });
}
console.log(courses);
console.log(FeaturedCourses);