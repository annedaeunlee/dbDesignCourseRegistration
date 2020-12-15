const FIND_ALL_STUDENTS  = "http://localhost:8080/findAllStudents"
const FIND_STUDENT_BY_ID = "http://localhost:8080/findStudentById"
const CREATE_STUDENT_URL = "http://localhost:8080/createStudent"


const findAllStudents = () =>
    fetch(`${FIND_ALL_STUDENTS}`)
    .then(response => response.json())

const findStudentById = (studentId) =>
    fetch(`${FIND_STUDENT_BY_ID}/${studentId}`)
    .then(response => response.json())

const createStudent = (first, last) =>
    fetch(`${CREATE_STUDENT_URL}/${first}/${last}`)
    .then(response => response.json())