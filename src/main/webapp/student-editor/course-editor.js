class CourseEditor extends React.Component {
  state = {
    course: {}
  }

  componentDidMount = () => this.findCourseById()

  findCourseById = () => {
    let search = window.location.search.split("=")
    const cid = search[1]
    findCourseById(cid)
      .then(course => this.setState({course}))
  }

  submitForm = () =>
    updateCourse(this.state.course)
      .then(this.findCourseById)

  render() {
    return(
      <div className="container-fluid">
        <h1>Course Editor {this.state.course.title}</h1>

          <input
            value={this.state.course.idcourse}
            className="form-control"
            readOnly={true}/>
          <input
            onChange={
              (event) =>
              this.setState({
              course: {...this.state.course, title: event.target.value}
            })}
            className="form-control"
            value={this.state.course.title}/>
          <input
              onChange={
                (event) =>
                    this.setState({
                      course: {...this.state.course, creditHours: event.target.value}
                    })}
              className="form-control"
              value={this.state.course.creditHours}/>
        <input
            onChange={
              (event) =>
                  this.setState({
                    course: {...this.state.course, courseNumber: event.target.value}
                  })}
            className="form-control"
            value={this.state.course.courseNumber}/>
        <input
            onChange={
              (event) =>
                  this.setState({
                    course: {...this.state.course, term: event.target.value}
                  })}
            className="form-control"
            value={this.state.course.term}/>
          <button
            type="button"
            onClick={() => this.submitForm()}
            className="btn btn-success">
            Save
          </button>
          <a className="btn btn-danger" href="../../course-list/course-list.html">
            Cancel
          </a>
        <a href={`../../section-list/section-list.html?cid=${this.state.course.idcourse}`}>
          Sections
        </a>
      </div>
    )
  }
}

ReactDOM.render(
  <CourseEditor />,
  document.getElementById('root')
)
