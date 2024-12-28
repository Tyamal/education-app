document.addEventListener('DOMContentLoaded', () => {
  const courses = [
    { title: 'Course 1', description: 'Description for course 1' },
    { title: 'Course 2', description: 'Description for course 2' },
    { title: 'Course 3', description: 'Description for course 3' }
  ];

  const courseList = document.querySelector('.course-list');
  courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.className = 'course-item';
    courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
    courseList.appendChild(courseItem);
  });
});
