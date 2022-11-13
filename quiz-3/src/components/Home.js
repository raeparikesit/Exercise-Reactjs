import React, { useContext, useEffect } from 'react'
import { Button, Table } from 'flowbite-react';
import { GlobalContext } from '../context/GlobalContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Home = () => {


    const { state } = useContext(GlobalContext)
    const {

        data, setData,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        input, setInput,
        handleInput, handleSubmit,
        handleDelete, handleEdit
    } = state


    let { ID_MOBILE_APPS } = useParams()
    useEffect(() => {
        if (ID_MOBILE_APPS !== undefined) {
            axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${ID_MOBILE_APPS}`)
                .then((res) => {
                    let data = res.data

                    setInput(
                        {
                            name: data.name,
                            description: data.description,
                            category: data.category,
                            release_year: data.release_year,
                            size: data.size,
                            price: data.price,
                            rating: data.rating,
                            image_url: data.image_url,
                        }
                    )
                })
        }
    }, [])

    useEffect(() => {
        if (fetchStatus === true) {
            axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
                .then((res) => {
                    setData([...res.data]);
                })
            setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus]);

    const handleApp = (is_android_app, is_ios_app) => {
        if (is_android_app == 1 && is_ios_app == 1) {
            return "IOS & Android";
        } else if (is_android_app == 1 && is_ios_app == 0) {
            return "Android"
        } else if (is_android_app == 0 && is_ios_app == 1) {
            return "IOS"
        }

    }


    return (
        <>
            <div>
                <section className="bg-gray-200 p-5">
                    <div className="container mx-auto mt-10">
                        <h1 className="text-xl font-bold ">Find your data that you need!</h1>
                    </div>
                    {data !== null && data.map((res, index) => {
                        return (
                            <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
                                <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img src={res.image_url} className="w-1/3 bg-cover bg-center bg-landscape" />
                                    <div className="w-2/3 p-4">
                                        <h1 className="text-gray-900 font-bold text-2xl">
                                            {res.name}
                                        </h1>
                                        <small>{res.release_year}</small>
                                        <p className="mt-2 text-gray-600 text-sm">
                                            {res.description}
                                        </p>
                                        <div className=" item-center mt-2 text-gray-500">
                                            <span>{res.category} </span>
                                            <span>{res.size}</span>
                                            <span>, {handleApp(res.is_android_app, res.is_ios_app)} </span>
                                        </div>
                                        <div className="flex item-center justify-between mt-3">
                                            <h1 className="text-gray-700 font-bold text-xl">
                                                Rp. {res.price}
                                            </h1>
                                            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                                                {res.rating}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </section>
            </div>
        </>
    );

}

export default Home