import React, { useState } from 'react'
import { useEffect } from 'react'
import { Table } from "flowbite-react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Button } from "flowbite-react";
import axios from 'axios'

const Tugas12 = () => {

  //materi fetching data
  const [data, setData] = useState(null)

  //materi create data
  const [input, setInput] = useState(
    {
      name: "",
      course: "",
      score: ""
    }
  )

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    //fetch data dengan kondisi
    if (fetchStatus === true) {
      axios.get(" https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })
      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])

  //handling input
  const handleInput = (event) => {
    let name = event.target.name
    let value = event.target.value

    if (name === "name") {
      setInput({ ...input, name: value })
    }else if(name ==="course"){
        setInput({ ...input, course: value })
    }else if(name ==="score"){
        setInput({ ...input, score: value })
    }
  }

  //handling submit
  const handleSubmit = (event) => {
    event.preventDefault()

    let {
      name,
      course,
      score
    } = input

    //create data
    axios.post(' https://backendexample.sanbercloud.com/api/student-scores', { name,course,score })
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })

    //clear input setelah create data
    setInput(
      {
        name: "",
        course: "",
        score: ""
      }
    )
  }
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

    <>
  <div className="flex justify-center items-center mt-8 mb-5 p-1 ">
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
        <div className="flex justify-center items-center my-8 p-1">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5 w-2/5">
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

export default Tugas12
