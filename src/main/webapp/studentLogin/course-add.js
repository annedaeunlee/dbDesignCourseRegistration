class CourseAdd extends React.Component {
  state = {
    courses: [],
    id: parseInt(window.location.search.split("=")[1], 10)

  }

  findAllCourses = () =>
      findAllCourses()
      .then((courses) => this.setState({courses}))

  createCourse = () =>
      createCourse()
      .then(() => this.findAllCourses())

  deleteCourse = (idcourse) =>
      deleteCourse(idcourse)
      .then(() => this.findAllCourses())

  componentDidMount = () =>
      this.findAllCourses()


  redirectTo(){
    var parameter1 = $order.paymentBefore; // some thing like this you can set value for 1st Param.
    var parameter2 = $order.guid; // some thing like this you can set value for 2nd Param.
    window.location.href="http://google.com/"+parameter1+"/"+parameter2;

  }

  render() {
    return(
        <div className="container-fluid">
            <a
                className="btn btn-success float-right"
                href={`/studentLogin/my-courses.html?`+this.state.id}>
                My Courses
            </a>
          <a className="btn btn-danger float-right"
             href="../../index.html">
            Home
          </a>
          <h1>Course List</h1>
          <table className="table">
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
                         href={`/studentLogin/section-add.html?`+this.state.id+'?'+course.idcourse}>
                        Sections
                      </a>
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
    <CourseAdd />,
    document.getElementById('root')
)


