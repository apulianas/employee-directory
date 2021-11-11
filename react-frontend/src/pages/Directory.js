import React from "react";
import ContactCell from '../ContactCell';

function DirectoryPage() {

    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query {
                    employees {
                        name
                        title
                        email
                        phone
                        location
                        picture
                    }
    }`,
        }),
    })
    .then((res) => res.json())
    .then(resData => {
        const employeesData = resData.data.employees;
        console.log(employeesData);
    })

    return (
        <div className="bg-gray-100">
        <section>
          <input type="text" className="ml-20 mt-6 rounded-md p-2" placeholder="search"/>
        </section>
        <section className={"grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20"}>
          <ContactCell/>
          <ContactCell/>
          <ContactCell/>
          <ContactCell/>
          <ContactCell/>
          <ContactCell/>
        </section>
      </div> 
    )
    
}

export default DirectoryPage;