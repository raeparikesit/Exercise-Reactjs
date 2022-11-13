import React from 'react';
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

import '../App.css';
const Tugas10 = () => {

    return (
        <div class="container">
        <Table className ="shadow-x1">
        <Table.Head>
          <Table.HeadCell className=" bg-indigo-500 text-White"> NO </Table.HeadCell>
          <Table.HeadCell className=" bg-indigo-500 text-White"> NAMA </Table.HeadCell>
          <Table.HeadCell className=" bg-indigo-500 text-White"> MATA KULIAH </Table.HeadCell>
          <Table.HeadCell className=" bg-indigo-500 text-White"> NILAI </Table.HeadCell>
          <Table.HeadCell className=" bg-indigo-500 text-White"> NILAI INDEX </Table.HeadCell>
          <Table.HeadCell className=" bg-indigo-500 text-White"> <span className=""> ACTION</span> </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 1 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> John </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> Algoritma </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 80 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> A </Table.Cell>
            <Table.Cell>
            <div className="flex flex-wrap gap-2"> 
                <div>
                    <Button size="sm" color="grey">
                     Edit
                    </Button>
                </div>               
                <div>
                    <Button size="sm" color="failure">
                     Delete
                    </Button>
                </div>
            </div> 
            </Table.Cell>

          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 2 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> Doe </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> Matematika </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 70 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> B </Table.Cell>
            <Table.Cell>
            <div className="flex flex-wrap gap-2"> 
                <div>
                    <Button size="sm" color="grey">
                     Edit
                    </Button>
                </div>               
                <div>
                    <Button size="sm" color="failure">
                     Delete
                    </Button>
                </div>
            </div> 
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 3 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> Frank </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> Kalkulus </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 60 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> C </Table.Cell>
            <Table.Cell>
            <div className="flex flex-wrap gap-2"> 
                <div>
                    <Button size="sm" color="grey">
                     Edit
                    </Button>
                </div>               
                <div>
                    <Button size="sm" color="failure">
                     Delete
                    </Button>
                </div>
            </div> 
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 4 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> Jason </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> Basis Data </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> 90 </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white"> A </Table.Cell>
            <Table.Cell>
            <div className="flex flex-wrap gap-2"> 
                <div>
                    <Button size="sm" color="grey">
                     Edit
                    </Button>
                </div>               
                <div>
                    <Button size="sm" color="failure">
                     Delete
                    </Button>
                </div>
            </div> 
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
 );
}
export default Tugas10;
  

  