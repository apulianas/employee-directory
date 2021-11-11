import React from "react";

function ContactCell(employeeData) {
    console.log(employeeData)
    return (
        <>
        {employeeData?.map((employee, index) => (
            <figure className="bg-white h-80 rounded-md pt-6" key={index}>
            <img 
                alt="user"
                className="w-16 h-16 rounded-full mx-auto"
                src={employee.picture}
            /> 
            <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {employee.name}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">title: </span>{employee.title}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">email: </span>{employee.email}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>{employee.phone}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">city: </span> {employee.location}
            </p>
            </figcaption>
            </figure>
        ))}
        </>
    )
}

export default ContactCell;