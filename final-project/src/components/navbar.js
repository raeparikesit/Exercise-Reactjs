import React from "react";


const Navbar = () =>{
    return(

 <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
     {/* Logo */}   
    <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a className="flex items-center" href="/">
            
            <img
              src="https://cdn-icons-png.flaticon.com/512/1100/1100741.png?w=740&t=st=1668071143~exp=1668071743~hmac=b1092174aca314e2e1e6895c4c6f9486d391adbe9f6e1cfd1336660539edd805"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-4xl font-bold whitespace-nowrap text-pink-400 mr-1" >
              JWS 
            </span>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> Join With Us </span>
          </a>

        {/* User */}
      <div className="flex items-center md:order-2">
        <button
        
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10 h-10 rounded-full "
          src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?size=338&ext=jpg&ga=GA1.2.2096949454.1667051496"
          
        />

      </button>
    </div>
  </div>
</nav>
      
        
    )
     
}

export default Navbar;