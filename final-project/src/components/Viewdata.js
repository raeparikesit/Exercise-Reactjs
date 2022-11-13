import React, { useContext, useEffect } from 'react'
import { Table } from 'flowbite-react';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { Button } from "flowbite-react";


const Viewdata = () => {
    const { state } = useContext(GlobalContext)
    const {

        data, setData,
        fetchStatus, setFetchStatus,
        handleDelete, handleEdit
    } = state


    useEffect(() => {
        if (fetchStatus === true) {
            axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
                .then((res) => {
                    setData([...res.data.data]);
                })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus]);

    return (
        <>
            <div className=" mt-12 grid justify-center mb-5 p-10">
            <h1 className=' mb-2 text-xl font-semibold text-gray-500 dark:text-gray-400'>LIST JOB VACANCY</h1>
                <Table class="sm:rounded-full">
                    <Table.Head class="bg-purple-600 text-white">
                        <Table.HeadCell>
                            No
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Title
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Job Description
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Job Qualification
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Job Type
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Job Tenur
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Job Status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Company Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Company Image
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Company City
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Salary Min
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Salary Max
                        </Table.HeadCell>
                        <Table.HeadCell >
                            ACTION
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {data !== null && data.map((res, index) => {
                            return (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <>
                                        <Table.Cell> 
                                            {index + 1}
                                        </Table.Cell>
                                        <Table.Cell className="font-medium text-gray-900 dark:text-white" >
                                            {res.title}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.job_description}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.job_qualification}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.job_type}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.job_tenure}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.job_status}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.company_name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <img src={res.company_image_url} className="max-w-xs">
                                            </img>
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.company_city}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.salary_min}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.salary_max}
                                        </Table.Cell>
                                        <Table.Cell>
                                        <div className="flex flex-nowrap gap-2">
                                            <Button color="warning" size="xs">
                                             <button size="xs" value={res.id} onClick={handleEdit}>
                                                 Edit
                                             </button>
                                             </Button>
                                             <Button color = "failure" size="xs" >
                                             <button size="xs" value={res.id} onClick={handleDelete}>
                                              Delete
                                             </button>
                                             </Button>
                                             </div>
                                        </Table.Cell>
                                    </>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table >
            </div >
        </>
    )

}

export default Viewdata;