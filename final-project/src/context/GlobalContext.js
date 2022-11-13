import React, { createContext, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    let navigate = useNavigate();
    const [data, setData] = useState(null)
    const [count, setCount] = useState(null)
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)

    const [input, setInput] = useState(
        {
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: "",
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: "",
            salary_max: ""
        }
    )



    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        if (name === "title") {
            setInput({ ...input, title: value })
        } else if (name === "job_description") {
            setInput({ ...input, job_description: value })
        } else if (name === "job_qualification") {
            setInput({ ...input, job_qualification: value })
        } else if (name === "job_type") {
            setInput({ ...input, job_type: value })
        } else if (name === "job_tenure") {
            setInput({ ...input, job_tenure: value })
        } else if (name === "job_status") {
            setInput({ ...input, job_status: value })
        } else if (name === "company_name") {
            setInput({ ...input, company_name: value })
        } else if (name === "company_image_url") {
            setInput({ ...input, company_image_url: value })
        } else if (name === "company_city") {
            setInput({ ...input, company_city: value })
        } else if (name === "salary_min") {
            setInput({ ...input, salary_min: value })
        } else if (name === "salary_max") {
            setInput({ ...input, salary_max: value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max

        } = input

        if (currentId === -1) {

            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max },
                { headers: { "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWV4YW1wbGUuc2FuYmVyY2xvdWQuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjY4MDg5NjQ5LCJleHAiOjE2Njg2OTQ0NDksIm5iZiI6MTY2ODA4OTY0OSwianRpIjoiZnIyV25ZcjhsQUpHcFBWTCIsInN1YiI6Nzc4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.fO-qz7xpIhy4oVoLGi5yPCH_jWiB8Qi0zW9jIVjT458" } })
                .then((res) => {
                    console.log(res)
                    setFetchStatus(true)
                    navigate("/dashboard/list-job-vacancy")
                })

        } else {


            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, { title, job_description, job_qualification, job_type, job_tenure, job_status, company_name, company_image_url, company_city, salary_min, salary_max },
                { headers: { "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWV4YW1wbGUuc2FuYmVyY2xvdWQuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjY4MDg5NjQ5LCJleHAiOjE2Njg2OTQ0NDksIm5iZiI6MTY2ODA4OTY0OSwianRpIjoiZnIyV25ZcjhsQUpHcFBWTCIsInN1YiI6Nzc4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.fO-qz7xpIhy4oVoLGi5yPCH_jWiB8Qi0zW9jIVjT458" } })
                .then((res) => {
                    console.log(res)
                    setFetchStatus(true)
                    navigate("/dashboard/list-job-vacancy")
                })

        }

        setCurrentId(-1)

        setInput(
            {
                title: "",
                job_description: "",
                job_qualification: "",
                job_type: "",
                job_tenure: "",
                job_status: "",
                company_name: "",
                company_image_url: "",
                company_city: "",
                salary_min: "",
                salary_max: ""
            }
        )
    }


    const handleDelete = (event) => {

        let ID_GAMES = parseInt(event.target.value)

        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES}`,
            { headers: { "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LWV4YW1wbGUuc2FuYmVyY2xvdWQuY29tXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjY4MDg5NjQ5LCJleHAiOjE2Njg2OTQ0NDksIm5iZiI6MTY2ODA4OTY0OSwianRpIjoiZnIyV25ZcjhsQUpHcFBWTCIsInN1YiI6Nzc4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.fO-qz7xpIhy4oVoLGi5yPCH_jWiB8Qi0zW9jIVjT458" } })
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
                navigate("/dashboard/list-job-vacancy")
            })

    }

    const handleEdit = (event) => {
        let ID_GAMES = parseInt(event.target.value)

        setCurrentId(ID_GAMES)

        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${ID_GAMES} `)
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
                navigate("/dashboard/list-job-vacancy/edit/${ID_GAMES}")

            })

    }


    let state = {
        data, setData,
        fetchStatus, setFetchStatus,
        count, setCount,
        currentId, setCurrentId,
        input, setInput,
        handleInput, handleSubmit,
        handleDelete, handleEdit
    }

    return (
        <GlobalContext.Provider value={
            {
                state
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )

}