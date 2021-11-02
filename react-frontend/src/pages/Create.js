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
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = event => {
        event.preventDefault();
        const name = this.nameElement.current.value;
        const title = this.titleElement.current.value;
        const location = this.locationElement.current.value;
        const email = this.emailElement.current.value;
        const phone = this.phoneElement.current.value;
        const picture = this.pictureElement.current.value;

        
        /*const requestBody = {
            query: `
                mutation {
                    createEmployee(employeeInput: {name: "${name}", title: "${title}", location: "${location}", email: "${email}", phone: "${phone}", picture: "${picture}") {
                        _id
                        name
                    }
                }
            `
        };*/

        fetch('http://localhost:8000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
        mutation {
            createEmployee (
            employeeInput: {name: "${name}", title: "${title}", location: "${location}", email: "${email}", phone: "${phone}", picture: "${picture}"}) {
                _id
                name
            }
        }`,
            }),
        })
        .then((res) => res.json())
        .then((result) => console.log(result));
        
    }
    render() {
        return (
            <form>
                <div className="form-control" onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.nameElement} />
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={this.titleElement} />
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" value={this.locationElement} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={this.emailElement} />
                    <label htmlFor="phone">Phone</label>
                    <input type="phone" id="phone" value={this.phoneElement} />
                    <label htmlFor="text">Picture</label>
                    <input type="picture" id="picture" value={this.pictureElement} />
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default CreatePage;