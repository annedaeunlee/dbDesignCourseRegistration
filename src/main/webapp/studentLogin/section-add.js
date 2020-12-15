class SectionAdd extends React.Component {
    state = {
        sections: [],
        studentId: window.location.search.split("?")[1]
    }

    findAllSections = () =>
        findAllSections()
            .then(sections => this.setState({sections}))

    findSectionsForCourse = () => {
        let search = window.location.search
        search = search.split("?")
        const courseId = search[2]
        findSectionsForCourse(courseId)
            .then(sections => this.setState({sections}))
    }

    addSection = (sectionId) => {
        console.log("hi")
        let search = window.location.search
        search = search.split("?")
        const studentId = search[1]
        createEnrollment(studentId, sectionId).then(() =>this.findSectionsForCourse())
    }



    componentDidMount = () => {
        let search = window.location.search
        debugger
        if(search) {
            this.findSectionsForCourse()
        } else {
            this.findAllSections()
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <a
                    className="btn btn-success float-right"
                    href={`/studentLogin/my-courses.html?`+this.state.studentId}>
                    My Courses
                </a>
                <a className="btn btn-danger float-right"
                   href="../../index.html">
                    Home
                </a>

                <h1>Sections</h1>

                <table className="table">
                    <thead>
                    <tr>
                        <th>Section ID</th>
                        <th>Professor</th>
                        <th>Lecture Time</th>
                        <th>Capacity</th>
                        <th>Capacity Remaining</th>
                        <th>Campus</th>
                        <th>Course</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.sections.map(section =>
                            <tr key={section.crn}>
                                <td>{section.crn}</td>
                                <td>{section.professor}</td>
                                <td>{section.lectureTime}</td>
                                <td>{section.capacity}</td>
                                <td>{section.capacityRemaining}</td>
                                <td>{section.campus}</td>
                                <td>
                                    <a href={`../../course-editor/course-editor.html?courseId=${section.courseId}`}>
                                        {section.courseTitle}
                                    </a>
                                </td>
                                <td>
                                    <a className="btn btn-primary"
                                       onClick={() => this.addSection(section.crn)}>
                                        Add
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
    <SectionAdd />,
    document.getElementById('root')
)
