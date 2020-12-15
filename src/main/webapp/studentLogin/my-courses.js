class MyCourses extends React.Component {
    state = {
        sectionInfo: [],
        sections: [],
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
        this.myCourses()

    myCourses = () => {
        let search = window.location.search
        search = search.split("?")
        const studentId = search[1]

        sectionList(studentId)
            .then((sections)=> this.setState({sections}))
    }

    courseName(sectionId){
        console.log(findSectionById(sectionId).courseTitle)
        return(
            <td>Hi</td>
        )
    }

    deleteEnrollment = (sectionId) => {
        let search = window.location.search
        search = search.split("?")
        const studentId = search[1]

        deleteEnrollment(studentId, sectionId)
            .then(() => this.myCourses())
}


    render() {

        return(
            <div className="container-fluid">
                <a className="btn btn-danger float-right"
                   href="../../index.html">
                    Home
                </a>
                <h1>Course List</h1>
                <table className="table">
                    <tbody>
                    {
                        this.state.sections.map((section) =>

                            <tr>
                                <td>{section.sectionId}</td>
                                <td>
                                    <button className="btn btn-danger float-right"
                                            onClick={() => this.deleteEnrollment(section.sectionId)}>
                                        Drop
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
    <MyCourses />,
    document.getElementById('root')
)

