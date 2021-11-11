import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

function ContactCell() {
    /*
    const EMPLOYEE_QUERY = gql`
    query{
        employees {
        name
        title
        email
        phone
        location
        picture
        }
    }`;

    const {data, loading, error} = useQuery(EMPLOYEE_QUERY);
    const [employees, setEmployees] = useState([]);
    useEffect (() => {
    if (data) {
        setEmployees(data.employees);
    }
    }, [data]);*/

    return (
        <>
        <figure className="bg-white h-80 rounded-md pt-6">
            <img 
                alt="user"
                className="w-16 h-16 rounded-full mx-auto"
                src="https://randomuser.me/api/portraits/women/15.jpg"
            /> 
            <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              Alec
            </p>
            <p className="text-gray-500">
              <span className="font-medium">email: </span>apulianas@gmail.com
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>410-409-7392
            </p>
            <p className="text-gray-500">
              <span className="font-medium">city: </span> Baltimore
            </p>
            </figcaption>
        </figure>
        </>
    )
}

export default ContactCell;