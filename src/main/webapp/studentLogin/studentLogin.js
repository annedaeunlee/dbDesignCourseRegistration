class StudentLogin extends React.Component {
  state = {
    id: -1
  }


  submitForm = () =>
      createStudent(this.state.student)

    componentDidMount = () =>
        this.findAllCourses()
  render() {
    return(
        <div className="container-fluid">
          <h1>Student Login</h1>

          <form>
            <label htmlFor="fname">Student ID:</label>
            <input
                type="text"
                id="fname"
                name="fname"
                onChange={
                  (event) =>
                      this.setState({
                        student: {...this.state.student, studentId: event.target.value}
                      })}
                className="form-control"
                value={this.state.student.studentId}/
            /><br></br>
            <button
                type="button"
                onClick={() => this.submitForm()}
                className="btn btn-success">
              Save
            </button>
          </form>

        </div>
    )
  }
}

ReactDOM.render(
    <StudentLogin />,
    document.getElementById('root')
)