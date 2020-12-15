class CourseAdd extends React.Component {
    state = {
        courses: [],
        search: window.location.search.split("=")
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

    render() {
        return(
            <div className="container-fluid">
                <button
                    className="btn btn-success float-right"
                    onClick={() => this.createCourse()}>
                    Create
                </button>
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
                                       href={`/studentLogin/section-add.html?${course.idcourse}?${search}`}>
                                        Sections
                                    </a>
                                </td>
                            </tr>)
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

