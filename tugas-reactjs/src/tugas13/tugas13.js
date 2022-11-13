import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Table } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { GlobalContext } from '../context/GlobalContext';

const Tugas13 = () => {
  const { state } = useContext(GlobalContext)
  const { handleFunction } = useContext(GlobalContext)

  const {
    data, setData,
    input, setInput,
    fetchStatus, setFetchStatus,
    currentId, setCurrentId
  } = state

  const {
    fetchData,
    handleInput,
    handleEdit,
    handleDelete,
    handleIndexScore,
    handleSubmit
  } = handleFunction

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData()
    }
  }, [fetchStatus, setFetchStatus, fetchData])

  return (
    <>
  <div className="overflow-x-auto relative mt-5 mb-5 p-20">
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
                    <Table.HeadCell>
                        ACTION
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
                                <Table.Cell>
                                <div className="flex flex-wrap gap-2">
                                 <div>
                                        <button className="text-white bg-yellow-400 text-sm" onClick={handleEdit} value={item.id}>Edit</button>
                                 </div>
                                  <div>
                                         <button className="text-white bg-red-700 text-sm" onClick={handleDelete} value={item.id}>Delete</button>
                                 </div>
                                  </div>
                                </Table.Cell>
                            </Table.Row>)
                    }
                </Table.Body>
            </Table>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5 ">
          <div>
            <div className="mb-2">
              <Label value="Nama"/>
            </div>
            <TextInput onChange={handleInput} value={input.name} type="text" name='name' required={true} />
          </div>
          <div>
            <div className="mb-2">
              <Label value="Mata Kuliah" />
            </div>
            <TextInput onChange={handleInput} value={input.course} type="text" name='course' required={true} />
          </div>
          <div>
            <div className="mb-2">
              <Label value="Nilai"/>
            </div>
            <TextInput onChange={handleInput} value={input.score} type="number" name='score' required={true} />
          </div>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}

export default Tugas13
