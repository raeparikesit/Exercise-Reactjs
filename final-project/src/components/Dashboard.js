import React from "react";
import axios from "axios";
import '../App.css';
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useEffect } from "react";

const Dashboard = () => {
    const { state, handleFunction } = useContext(GlobalContext)
    
    const {
        data, setData,
        fetchStatus, setFetchStatus,
        count, setCount,
        currentId, setCurrentId,
        input, setInput
    } = state;

    useEffect(() => {
        if(fetchStatus === true){
            axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                console.log(res.data.data)
                let data = parseInt(res.data.data.length);
                
                setCount(data)
                
            })
            .catch((err) => {});
            
        }
    }, [fetchStatus, setFetchStatus]);
    
    return(
        <>

        <div className="dash mt-20  mb-5 container m-auto w-3/4 rounded-lg border">  
            <h1 className=" ml-3 mt-3 mb-3 text-xl text-gray-700 font-semibold">Jumlah job tersedia : {count}</h1>
            {data !== null && data.map((res, index) => {
              return(
                  <>
                  <div className="w-5/6 m-auto mt-4 mb-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-10">
                    <a >
                      <img className="rounded-t-lg w-20" src={res.company_image_url} />
                    </a>
                  <div className="p-5">
                   <a >
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{res.title}</h1>
                   </a>
                   <a >
                      <h2 className="mb-2 text-1xl font-semibold tracking-tight text-gray-900 dark:text-white">{res.company_name} | {res.company_city}</h2>
                   </a>
                      <hr/>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{res.job_description}</p>
                      <br/>
                      <a >
                      <h3 className="mb-2 text-1xl font-lg tracking-tight text-gray-900 dark:text-white">Rp.{res.salary_min},00 - Rp.{res.salary_max},00</h3>
                      </a>
                      <br/>
                  <a href="/dashboard/list-job-vacancy" className="inline-flex  items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Apply
                  <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
                  </>
             )
            })} 
        </div>
          
       </>
    )
 
}

export default Dashboard;