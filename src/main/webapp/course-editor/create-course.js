class CreateCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            creditHours: 0,
            courseNumber: 0,
            term: '',
        };
    }
    handle1 = (event) => {
        this.setState({title: event.target.value});
    }

    handle2 = (event) => {
        this.setState({creditHours: event.target.value});
    }

    handle3 = (event) => {
        this.setState({courseNumber: event.target.value});
    }

    handle4 = (event) => {
        this.setState({term: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Created")
        createCourse(this.state.title, this.state.creditHours, this.state.courseNumber, this.state.term)
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Create New Course</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id" >Title: </label><br/>
                    <input onChange={this.handle1} type="text"/>
                    <br/>
                    <label htmlFor="id" >Credit Hours: </label><br/>
                    <input onChange={this.handle2} type="text"/>
                    <br/>
                    <label htmlFor="id" >Course Number: </label><br/>
                    <input onChange={this.handle3} type="text"/>
                    <br/>
                    <label htmlFor="id" >Term: </label><br/>
                    <input onChange={this.handle4} type="text"/>
                    <br/>
                    <br/>
                        <input type="submit" value="Submit"/>
                </form>
                </div>
        )
    }
}

ReactDOM.render(
    <CreateCourse />,
    document.getElementById('root')
)

