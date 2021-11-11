import React, {useState} from "react"
import useFetch from 'react-fetch-hook'

function AdminPage() {
    const randomUserURL = 'https://randomuser.me/api/';
    const { isLoading, data, error } = useFetch(randomUserURL+'?results=10');
    console.log(data);
    var titles = ["Developer", "Developer", "Developer", "Project Manager", 
    "Human Resources", "Sales Representative", "Sales Representative"]

    const handleSubmit = event => {
        event.preventDefault();
        data.results.map(employee =>
            fetch('http://localhost:8000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `
                        mutation {
                            createEmployee (
                            employeeInput: {name: "${employee.name.first + " " + employee.name.last}", title: "${titles[Math.floor(Math.random()*titles.length)]}", location: "${employee.location.city}", email: "${employee.email}", phone: "${employee.cell}", picture: "${employee.picture.large}"}) {
                                _id
                                name
                            }
            }`,
                }),
            })
            .then((res) => res.json())
            .then((result) => console.log(result))
            );
        window.location.reload(false);
    };
        
    return (
        <form onSubmit = {handleSubmit}>
            <div className="form-actions text-center m-5">
                <button type="submit">Add Random Employees</button>
            </div>
        </form>
    );
}

export default AdminPage;