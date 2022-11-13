import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="flex flex-wrap justify-center mt-2 mb-1">
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-1/2 ">
                <div className="flex flex-col gap-5 mt-5">
                    
                        <h1 className="text-2xl font-bold">Kelas React</h1>
                    
                </div>
                <div>
                    
                    <Link to = {'/'} className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</Link>
                    <Link to = {'/tugas15'} className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Tugas15</Link>
                </div>
            </nav>
        </div>
        
    )
     
}

export default Navbar;