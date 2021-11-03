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
                <label>Name</label>
                <input type="text" id="name" onChange={handleNameChange} value={name} />
                <label>Title</label>
                <input type="text" id="title" onChange={handleTitleChange} value={title}/>
                <label>Location</label>
                <input type="text" id="location" onChange={handleLocationChange} value={location}/>
                <label>Email</label>
                <input type="email" id="email" onChange={handleEmailChange} value={email}/>
                <label>Phone</label>
                <input type="phone" id="phone" onChange={handlePhoneChange} value={phone}/>
                <label>Picture</label>
                <input type="picture" id="picture" onChange={handlePictureChange} value={picture}/>
            </div>
            <div className="form-actions">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default CreatePage;