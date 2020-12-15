class CreateSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cid: -1,
            professor: '',
            lectureTime: '',
            capacity: -1,
            capacityRemaining: -1,
            campus: '',
        };
    }
    handle1 = (event) => {
        this.setState({cid: event.target.value});
    }

    handle2 = (event) => {
        this.setState({professor: event.target.value});
    }

    handle3 = (event) => {
        this.setState({lectureTime: event.target.value});
    }

    handle4 = (event) => {
        this.setState({capacity: event.target.value});
    }

    handle5 = (event) => {
        this.setState({capacityRemaining: event.target.value});
    }

    handle6 = (event) => {
        this.setState({campus: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Created")
        createSection(this.state.cid, this.state.professor, this.state.lectureTime, this.state.capacity,
            this.state.capacityRemaining, this.state.campus)
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Create New Section</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="id" >Course ID: </label><br/>
                    <input onChange={this.handle1} type="text"/>
                    <br/>
                    <label htmlFor="id" >Professor: </label><br/>
                    <input onChange={this.handle2} type="text"/>
                    <br/>
                    <label htmlFor="id" >Lecture Time: </label><br/>
                    <input onChange={this.handle3} type="text"/>
                    <br/>
                    <label htmlFor="id" >Capacity: </label><br/>
                    <input onChange={this.handle4} type="text"/>
                    <br/>
                    <label htmlFor="id" >Capacity Remaining: </label><br/>
                    <input onChange={this.handle5} type="text"/>
                    <br/>
                    <label htmlFor="id" >Campus: </label><br/>
                    <input onChange={this.handle6} type="text"/>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

ReactDOM.render(
    <CreateSection />,
    document.getElementById('root')
)

