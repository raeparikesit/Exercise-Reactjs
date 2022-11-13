import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    let navigate = useNavigate();

    const [data, setData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);
    const [currentId, setCurrentId] = useState(-1);
    const [input, setInput] = useState(
        {
            name:"",
            course:"",
            score:null
        }
    )


    // Inisialisasi Function dan State
    function handleIndexScore(params){
        if(params >= 80){
            return "A";
        }
        else if(params>=70 && params <80){
            return "B";
        }
        else if(params >=60 && params<70){
            return "C";
        }
        else if(params >=50 && params<60){
            return "D";
        }
        else if(params<50){
            return "E";
        }
    }

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if(name === "name"){
            setInput( {...input, name : value} )
        }
        else if(name === "course"){
            setInput( {...input, course : value} )
        }
        else if(name === "score"){
            setInput( {...input, score : value} )
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {
            name,
            course,
            score
        } = input;

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/student-scores' , { name, course, score})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
                navigate('/tugas15')
            })
            .catch((err) => {});
        }
        else{
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}` , { name, course, score})
            .then((res) => {
                setFetchStatus(true)
                navigate('/tugas15')
            })
            .catch((err) => {});
        }
        
        setCurrentId(-1)

        setInput(
            {
                name : "",
                course : "",
                score : 0
            }
        )
    }

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then((res) => {
                setFetchStatus(true)
            })
            .catch((err) => {});
    }

    const handleEdit = (event) => {
        let idData=parseInt(event.target.value)
        setCurrentId(idData)
        navigate(`edit/${idData}`)
    }
    

    let state = {
        data, setData,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        input, setInput
    }

    let handleFunction = {
        handleInput,
        handleSubmit,
        handleEdit,
        handleDelete,
        handleIndexScore
    }



    return(
        <GlobalContext.Provider value={
            {
                state,
                handleFunction
            }
        }>
            { props.children }
        </GlobalContext.Provider>
    )
}