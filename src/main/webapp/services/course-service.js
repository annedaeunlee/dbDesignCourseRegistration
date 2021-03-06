const FIND_ALL_COURSES  = "http://localhost:8080/findAllCourses"
const FIND_COURSE_BY_ID = "http://localhost:8080/findCourseById"
const CREATE_COURSE_URL = "http://localhost:8080/createCourse"
const DELETE_COURSE_URL = "http://localhost:8080/deleteCourse"
const UPDATE_COURSE     = "http://localhost:8080/updateCourse"

const findAllCourses = () =>
  fetch(`${FIND_ALL_COURSES}`)
    .then(response => response.json())

const findCourseById = (courseId) =>
  fetch(`${FIND_COURSE_BY_ID}/${courseId}`)
    .then(response => response.json())

const createCourse = (title, creditHours, courseNumber, term) =>
    fetch(`${CREATE_COURSE_URL}/${title}/${creditHours}/${courseNumber}/${term}`)
        .then(response => response.json())

const deleteCourse = (cid) =>
  fetch(`${DELETE_COURSE_URL}/${cid}`)

const updateCourse = (course) =>
  fetch(`${UPDATE_COURSE}/${course.idcourse}/${course.title}/${course.creditHours}/${course.courseNumber}/${course.term}`)
    .then(response => response.json())
