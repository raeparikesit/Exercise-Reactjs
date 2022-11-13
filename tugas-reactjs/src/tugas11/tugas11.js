import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import axios from 'axios';

export default function Tugas11() {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                setData([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);
    function handleIndexScore(nilai){
        if(nilai>=80){
            return "A";
        }
        if(nilai>=70){
            return "B";
        }
        if(nilai>=60){
            return "C";
        }
        if(nilai>=50){
            return "D";
        }
        return "E";
    }
    return (
        <div className="flex justify-center items-center mt-8 mb-5 p-1">
            <Table className="sm:rounded-full text-center" >
                <Table.Head className="!text-white !bg-purple-500">
                    <Table.HeadCell>
                        No
                    </Table.HeadCell>
                    <Table.HeadCell className="!px-50">
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
                </Table.Head>
                <Table.Body className="divide-y">

                    {data !== null &&
                        data.map((item,index) =>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                                <Table.Cell>
                                    {index+1}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.course}
                                </Table.Cell>
                                <Table.Cell>
                                    {item.score}
                                </Table.Cell>
                                <Table.Cell>
                                    {handleIndexScore(item.score)}
                                </Table.Cell>
                            </Table.Row>)
                    }

                </Table.Body>
            </Table>

            
        </div>
    );
}