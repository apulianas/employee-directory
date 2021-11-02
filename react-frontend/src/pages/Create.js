import React, {Component} from "react";

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.nameElement = React.createRef();
        this.titleElement = React.createRef();
        this.locationElement = React.createRef();
        this.emailElement = React.createRef();
        this.phoneElement = React.createRef();
        this.pictureElement = React.createRef();
    }

    submitHandler = event => {
        event.preventDefault();
        const name = this.nameElement.current.value;
        const title = this.titleElement.current.value;
        const location = this.locationElement.current.value;
        const email = this.emailElement.current.value;
        const phone = this.phoneElement.current.value;
        const picture = this.pictureElement.current.value;

        
        const requestBody = {
            query: `
                query {
                    createEmployee(employeeInput: {name: "${name}", title: "${title}", location: "${location}", email: "${email}", phone: "${phone}", picture: "${picture}") {
                        _id
                        name
                    }
                }
            `
        };

        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed to create new employee');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <form>
                <div className="form-control" onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" ref={this.nameElement} />
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={this.titleElement} />
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" ref={this.locationElement} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" ref={this.emailElement} />
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" id="phone" ref={this.phoneElement} />
                    <label htmlFor="text">Picture</label>
                    <input type="picture" id="picture" ref={this.pictureElement} />
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default CreatePage;