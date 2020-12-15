class SectionList extends React.Component {
  state = {
    sections: []
  }

  findAllSections = () =>
      findAllSections()
      .then(sections => this.setState({sections}))

  findSectionsForCourse = () => {
    let search = window.location.search
    search = search.replace("?", "")
    search = search.split("=")
    const courseId = search[1]
    findSectionsForCourse(courseId)
    .then(sections => this.setState({sections}))
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
          <a className="btn btn-success float-right"
             href="../section-editor/createSection.html">
            Create
          </a>
          <a className="btn btn-danger float-right"
             href="../../index.html">
            Home
          </a>
          <h1>Section List</h1>

          <table className="table">
            <thead>
            <tr>
              <th>Section ID</th>
              <th>Professor</th>
              <th>Lecture Time</th>
              <th>Capacity</th>
              <th>Capacity Remaining</th>
              <th>Campus</th>
              <th>Name</th>
              <th>Course</th>
              <th>&nbsp;</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.sections.map((section) =>
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
                         href={`../../section-editor/section-editor.html?sectionId=${section.crn}`}>
                        Edit
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
    <SectionList />,
    document.getElementById('root')
)
