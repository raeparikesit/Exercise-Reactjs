import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'flowbite-react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Formdata = () => {
    const { state } = useContext(GlobalContext)
    const {

        data, setData,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        input, setInput,
        handleInput, handleSubmit,
        handleDelete, handleEdit
    } = state


    let { ID_GAMES } = useParams()

    useEffect(() => {
        if (ID_GAMES !== undefined) {
            axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_GAMES}`)
                .then((res) => {
                    let data = res.data

                    setInput(
                        {
                            title: data.title,
                            job_description: data.job_description,
                            job_qualification: data.job_qualification,
                            job_type: data.job_type,
                            job_tenure: data.job_tenure,
                            job_status: data.job_status,
                            company_name: data.company_name,
                            company_image_url: data.company_image_url,
                            company_city: data.company_city,
                            salary_min: data.salary_min,
                            salary_max: data.salary_max
                        }
                    )
                })
        }
    }, [])

    return (
        <>
            <div className="container ml-2 mt-20 grid">
              <h1 className=' mb-2 ml-5 text-xl font-semibold text-gray-500 dark:text-gray-400'>FORM DATA</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="mb-2 block container px-10">
                        <span>Title </span><br />
                        <input onChange={handleInput} value={input.title} name='title' type='text' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Job Description </span><br />
                        <input onChange={handleInput} value={input.job_description} name='job_description' type='text' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Job Qualification </span><br />
                        <input onChange={handleInput} value={input.job_qualification} name='job_qualification' type='text' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Job Type </span><br />
                        <input onChange={handleInput} value={input.job_type} name='job_type' type='text' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Job Tenure </span><br />
                        <input onChange={handleInput} value={input.job_tenure} name='job_tenure' type='text' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Job Status </span><br />
                        <input onChange={handleInput} value={input.job_status} name='job_status' type='number' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Company Name </span><br />
                        <input onChange={handleInput} value={input.company_name} name='company_name' type='text' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Company Image URL </span><br />
                        <input onChange={handleInput} value={input.company_image_url} name='company_image_url' type='string' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Company City </span><br />
                        <input onChange={handleInput} value={input.company_city} name='company_city' type='string' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Salary Min </span><br />
                        <input onChange={handleInput} value={input.salary_min} name='salary_min' type='number' class="bg-gray-50 border border-gray-300 tenumberray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <span>Salary Max </span><br />
                        <input onChange={handleInput} value={input.salary_max} name='salary_max' type='number' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} /><br />

                        <Button className="mb-3" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </>
    )

}
export default Formdata;