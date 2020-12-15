const FIND_ALL_ENROLLMENTS  = "http://localhost:8080/findAllEnrollments"
const FIND_ENROLLMENT= "http://localhost:8080/findEnrollment"
const DELETE_ENROLLMENT = "http://localhost:8080/deleteEnrollment"
const CREATE_ENROLLMENT = "http://localhost:8080/createEnrollment"

const findAllEnrollments = () =>
    fetch(`${FIND_ALL_ENROLLMENTS}`)
        .then(response => response.json())

const findEnrollment = (studentId, sectionId) =>
    fetch(`${FIND_ENROLLMENT}/${studentId}/${sectionId}`)
        .then(response => response.json())

const createEnrollment = (studentId, sectionId) =>
    fetch(`${CREATE_ENROLLMENT}/${studentId}/${sectionId}`)
        .then(response => response.json())

const deleteEnrollment = (studentId, sectionId) =>
    fetch(`${DELETE_ENROLLMENT}/${studentId}/${sectionId}`)