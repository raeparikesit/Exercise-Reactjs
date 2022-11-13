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
            description:"",
            category:"",
            release_year:"",
            size:"",
            price:"",
            rating:"",
            image_url:"",
            is_android_app:"",
            is_ios_app:""
        }
    )


    // Inisialisasi Function dan State

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if(name === "name"){
            setInput( {...input, name : value} )
        }
        else if(name === "description"){
            setInput( {...input, description : value} )
        }
        else if(name === "category"){
            setInput( {...input, category : value} )
        }
        else if(name === "release_year"){
            setInput( {...input, release_year : value} )
        }
        else if(name === "size"){
            setInput( {...input, size : value} )
        }
        else if(name === "price"){
            setInput( {...input, price : value} )
        }
        else if(name === "rating"){
            setInput( {...input, rating : value} )
        }
        else if(name === "image_url"){
            setInput( {...input, image_url : value} )
        }
        else if(name === "is_android_app"){
            setInput( {...input, is_android_app : value} )
        }
        else if(name === "is_ios_app"){
            setInput( {...input, is_ios_app : value} )
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let {
            name,
            description,
            category,
            release_year,
            size,
            price,
            rating,
            image_url,
            is_android_app,
            is_ios_app
        } = input;

        if(currentId === -1){
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps' , { name, description, category, release_year, size, price, rating, image_url, is_android_app, is_ios_app})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
                navigate('/manage-data')
            })
            .catch((err) => {});
        }
        else{
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}` , { name, description, category, release_year, size, price, rating, image_url, is_android_app, is_ios_app})
            .then((res) => {
                setFetchStatus(true)
                navigate('/manage-data')
            })
            .catch((err) => {});
        }
        
        setCurrentId(-1)

        setInput(
            {
                name:"",
                description:"",
                category:"",
                release_year:"",
                size:"",
                price:"",
                rating:"",
                image_url:"",
                is_android_app:"",
                is_ios_app:""
            }
        )
    }

    const handleDelete = (event) => {
        let ID_MOBILE_APPS = parseInt(event.target.value)

        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
            .then((res) => {
                setFetchStatus(true)
            })
            .catch((err) => {});
    }

    const handleEdit = (event) => {
        let ID_MOBILE_APPS = parseInt(event.target.value)

        setCurrentId(ID_MOBILE_APPS)

        axios.get('https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}')
        .then((res) => {
            let data = res.data
            setInput(
            {
                name: data.name,
                description:data.description,
                category:data.category,
                release_year:data.release_year,
                size:data.size,
                price:data.price,
                rating:data.rating,
                image_url:data.image_url,
                is_android_app:data.is_android_app,
                is_ios_app:data.is_ios_app
            }
            )

        })

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