import React, { Component } from 'react'


class AddEvent extends Component {

    state = {
        eventName: null,
        category: null,
        eventDate: null,
        eventInfo: null,
        cost: null,

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEvent(this.state)
        this.setState({
            eventName: '',
            category: '',
            eventDate: '',
            eventInfo: '',
            cost: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor="name">EventName:</label>
                    <input type="text" id="eventName" onChange={this.handleChange} value={this.state.eventName} />
                    <label htmlFor="name">Category:</label>
                    <input type="text" id="category" onChange={this.handleChange} value={this.state.category} />
                    <label htmlFor="name">EventDate:</label>
                    <input type="text" id="eventDate" onChange={this.handleChange} value={this.state.eventDate} />
                    <label htmlFor="name">EventInfo:</label>
                    <input type="text" id="eventInfo" onChange={this.handleChange} value={this.state.eventInfo} />
                    <label htmlFor="name">Cost:</label>
                    <input type="text" id="cost" onChange={this.handleChange} value={this.state.cost} />
                    <button type="submit" class="waves-effect waves-light btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddEvent