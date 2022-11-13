import React from 'react'
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const navbar = () => {
    return (


        <Navbar className = " mb-5">
            <Navbar.Brand >
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Quiz 3 | Muhammad Raehan Parikesit
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="flex justify-between py-5 px-10 sticky ">
                <Navbar.Link className="text-xl font-semibold dark:text-white" active={true}>
                    <Link to={'/'}>Home</Link>
                </Navbar.Link>
                <Navbar.Link className="text-xl font-semibold dark:text-white">
                    <Link to={'/manage-data'}>Manage Data</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default navbar