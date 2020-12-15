class StudentList extends React.Component {
    state = {
        students: []
    }

    findAllStudents = () =>
        findAllStudents()
            .then((students) => this.setState({students}))

    deleteStudent = (id) =>
        deleteStudent(id)
            .then(() => this.findAllStudents())

    componentDidMount = () =>
        this.findAllStudents()

    render() {
        return(
            <div className="container-fluid">
                <a className="btn btn-success float-right"
                   href="../student-editor/create.html">
                    Create
                </a>
                <a className="btn btn-danger float-right"
                   href="../../index.html">
                    Home
                </a>
                <h1>Student List</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.students.map((student) =>

                            <tr key={student.studentId}>
                                <td>{student.studentId}</td>
                                <td>{student.first}</td>
                                <td>{student.last}</td>
                                <td>
                                  <a className="btn btn-primary float-right"
                                     href={`studentList-editor.html?studentId=${student.studentId}`}>
                                    Edit
                                  </a>
                                    <button className="btn btn-danger float-right"
                                            onClick={() => this.deleteStudent(student.studentId)}>
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
    <StudentList />,
    document.getElementById('root')
)

