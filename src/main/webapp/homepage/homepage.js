class Homepage extends React.Component{

  render() {
    return(

  <h1>Course Registration</h1>
  <h2>Choose one of the following:</h2>
  <h3 href="../../course-list.html">Student</h3>
  <h3 href="../../course-list.html">Administrator</h3>

  )}

}

ReactDOM.render(
    <Homepage />,
    document.getElementById('root')
)