import React from "react";


const Home = () => {
    return(
      <>
    <div className=" grid justify-center mt-12 mb-5 p-10 ">
    <img
          className="mx-auto max-w-xs h-auto rounded-full  "
          src="profil.jpg"
        />
     
        <h1 className=" mx-auto text-3x1 font-black text-gray-900 dark:text-white mt-3"> Hi !</h1>
        <hr/>
        <h2 className="text-justify mx-auto text-1x1 font-semibold text-gray-900 dark:text-white mt-3">
        I'm Muhammad Raehan Parikesit, usually called Rae. Im an enthusiastic student who is interested in IT, and likes to learn new things, especially computer networks. 
        Enjoying working on some projects . Love to work in a team, easily adaptable to new responsibilities 
        and environments, highly motivated, emphasize logic and critical thinking.
        </h2>
        <a className="flex items-center" href="https://www.linkedin.com/in/muhammad-raehan-parikesit">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white mr-1"> Connect with me </span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/408/408754.png?w=740&t=st=1668163412~exp=1668164012~hmac=0bb9c80de6c30b7e5ca5fe72bfca326f5e33b875cd58c3318dde5ecfb1cd9c54"
              className="mr-3 h-6 sm:h-9"
              alt="LinkedIn"
            />
           
            
          </a>
    </div>
      
      </>  
    )
}
export default Home;