class StudentEditor extends React.Component {
  state = {
    student: {}
  }

  componentDidMount = () => this.findStudentById()

  findStudentById = () => {
    let search = window.location.search.split("=")
    const sid = search[1]
    findStudentById(sid)
    .then(student => this.setState({student}))
  }

  submitForm = () => {
    updateStudent(this.state.student)
    .then(this.findStudentById)
  }

  render() {
    return(
        <div className="container-fluid">
          <h1>Student Info Editor </h1>
          <form>
          <input
              value={this.state.student.studentId}
              className="form-control"
              readOnly={true}/>
          <input
              onChange={
                (event) =>
                    this.setState({
                      student: {...this.state.student, first: event.target.value}
                    })}
              className="form-control"
              value={this.state.student.first}/>
          <input
              onChange={
                (event) =>
                    this.setState({
                      student: {...this.state.student, last: event.target.value}
                    })}
              className="form-control"
              value={this.state.student.last}/>
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
    <StudentEditor />,
    document.getElementById('root')
)
