class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first: '',
        last: ''};
    }
    handleFirst = (event) => {
        this.setState({first: event.target.value});
    }

    handleLast = (event) => {
        this.setState({last: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Registered")
        createStudent(this.state.first, this.state.last)
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Register New Student</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id" >First Name: </label><br/>
                    <input onChange={this.handleFirst} type="text"/>
                    <br/>
                    <label htmlFor="id" >Last Name: </label><br/>
                    <input onChange={this.handleLast} type="text"/>
                    <br/>
                    <br/>
                        <input type="submit" value="Submit"/>
                </form>
                </div>
        )
    }
}

ReactDOM.render(
    <Create />,
    document.getElementById('root')
)

