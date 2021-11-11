import React from "react";

function ContactCell() {
    return (
        <>
            <figure className="bg-white h-80 rounded-md pt-6">
            <img 
                alt="user"
                className="w-16 h-16 rounded-full mx-auto"
                src="https://randomuser.me/api/portraits/women/24.jpg"
            /> 
            <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              Alec
            </p>
            <p className="text-gray-500">
              <span className="font-medium">title: </span>Developer
            </p>
            <p className="text-gray-500">
              <span className="font-medium">email: </span>apulianas@gmail.com
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>410-555-2112
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