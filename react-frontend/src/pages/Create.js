import React, {useState} from "react";

function CreatePage() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [picture, setPicture] = useState('');

    const handleNameChange = event => {
        setName(event.target.value)
    };
    const handleTitleChange = event => {
        setTitle(event.target.value)
    };
    const handleLocationChange = event => {
        setLocation(event.target.value)
    };
    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePhoneChange = event => {
        setPhone(event.target.value)
    };
    const handlePictureChange = event => {
        setPicture(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
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
    };
        
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <div className="text-center m-5">
                    <label>Name: </label>
                    <input type="text" id="name" onChange={handleNameChange} value={name} />
                </div>
                <div className="text-center m-5">
                    <label>Title: </label>
                    <input type="text" id="title" onChange={handleTitleChange} value={title}/>
                </div>
                <div className="text-center m-5">
                    <label>Location: </label>
                    <input type="text" id="location" onChange={handleLocationChange} value={location}/>
                </div>
                <div className="text-center m-5">
                    <label>Email: </label>
                    <input type="email" id="email" onChange={handleEmailChange} value={email}/>
                </div>
                <div className="text-center m-5">
                    <label>Phone: </label>
                    <input type="phone" id="phone" onChange={handlePhoneChange} value={phone}/>
                </div>
                <div className="text-center m-5">
                    <label>Picture Link: </label>
                    <input type="picture" id="picture" onChange={handlePictureChange} value={picture}/>
                </div>
            </div>
            <div className="form-actions text-center m-5">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default CreatePage;