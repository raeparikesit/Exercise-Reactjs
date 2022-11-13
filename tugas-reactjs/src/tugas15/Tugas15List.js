import React, { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const Tugas15List = () => {
    const { state, handleFunction } = useContext(GlobalContext)
    
    const {
        data, setData,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        input, setInput
    } = state;

    const {
        handleInput,
        handleSubmit,
        handleEdit,
        handleDelete,
        handleIndexScore
    } = handleFunction

    useEffect(() => {
        if(fetchStatus === true){
            axios.get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((result) => {
                console.log(result.data);
                let data = result.data;

                let resultData = data.map((r) => {
                    let { course, created_at, id, name, score, updated_at} = r;
                    return {
                        course,
                        name,
                        score,
                    };
                });
                setData([...result.data]);
            })
            .catch((err) => {});
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus]);



    return(
        <>
            <div className="mt-12 grid justify-center mt-2 mb-5 p-20">
                <div className="flex flex-wrap gap-2">
                <Link to={'/create'}><Button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-2 py-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mb-2">Create Data</Button></Link>
                </div>
                <Table class="sm:rounded-full" >
                    <Table.Head class="bg-purple-700 text-white">
                        <Table.HeadCell>
                            NO
                        </Table.HeadCell>
                        <Table.HeadCell>
                            NAMA
                        </Table.HeadCell>
                        <Table.HeadCell>
                            MATA KULIAH
                        </Table.HeadCell>
                        <Table.HeadCell>
                            NILAI
                        </Table.HeadCell>
                        <Table.HeadCell>
                            INDEX NILAI
                        </Table.HeadCell>
                        <Table.HeadCell>
                            ACTION
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { data !== null &&
                            data.map((result, index) => {
                                return(
                                    <>
                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell>
                                                {index + 1}
                                            </Table.Cell>
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                {result.name}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {result.course}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {result.score}
                                            </Table.Cell>
                                            <Table.Cell>
                                                {handleIndexScore(result.score)}
                                            </Table.Cell>
                                            <Table.Cell>
                                                <div className="flex flex-wrap gap-2">
                                                <div>
                                                <button className="text-white bg-yellow-400 text-sm" onClick={handleEdit} value={result.id} >
                                                    Edit
                                                </button>
                                                </div>

                                                <div>
                                                <button className="text-white bg-red-700 text-sm" onClick={handleDelete} value={result.id} >
                                                    Delete
                                                </button>
                                                </div>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    </>
                                );
                            })
                        }
                    </Table.Body>
                </Table>
                
                
            </div>

            
        </>
    );
};

export default Tugas15List;