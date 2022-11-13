import React, { useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { useParams } from "react-router-dom";

const Tugas15Form = () => {

    let {IdData} = useParams()
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
        if(IdData !== undefined){
            axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${IdData}`)
            .then((res) => {
                let data = res.data

                setInput(
                    {
                        name : data.name,
                        course : data.course,
                        score : data.score
                    }
                )
            })
        }
    }, []);



    return(
        <>
        <div className="overflow-x-auto relative mt-5 mb-5 p-20">
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
          <div className="flex flex-wrap gap-2">
            <div>
          <Button type="submit"> Submit </Button>
          </div>
          </div>
        </form>
        </div>
    </>
    );
};

export default Tugas15Form;