class CourseList extends React.Component {
  state = {
    courses: []
  }

  findAllCourses = () =>
    findAllCourses()
      .then((courses) => this.setState({courses}))

  createCourse = () =>
    createCourse()
      .then(() => this.findAllCourses())

  deleteCourse = (idcourse) => {
      alert("Deleted")
      deleteCourse(idcourse)
          .then(() => this.findAllCourses())
  }

  componentDidMount = () =>
    this.findAllCourses()

  render() {
    return(
      <div className="container-fluid">
          <a className="btn btn-success float-right"
             href="../course-editor/create.html">
              Create
          </a>
        <a className="btn btn-danger float-right"
           href="../../index.html">
          Home
        </a>
        <h1>Course List</h1>
        <table className="table">
          <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Title</th>
            <th>Credit Hours</th>
            <th>Course Number</th>
            <th>Term</th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.courses.map((course) =>

              <tr key={course.idcourse}>
                <td>{course.idcourse}</td>
                <td>{course.title}</td>
                <td>{course.creditHours}</td>
                <td>{course.courseNumber}</td>
                <td>{course.term}</td>
                <td>
                  <a className="btn btn-primary float-right"
                     href={`/course-editor/course-editor.html?idcourse=${course.idcourse}`}>
                    Edit
                  </a>
                  <button className="btn btn-danger float-right"
                          onClick={() => this.deleteCourse(course.idcourse)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <CourseList />,
  document.getElementById('root')
)

