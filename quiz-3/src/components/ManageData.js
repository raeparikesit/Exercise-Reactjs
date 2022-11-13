import React,{useContext} from "react";
import { useEffect } from "react";
import { Table, Textarea } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Label } from "flowbite-react";
import { Button } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

const ManageData = () => {

        const { state , handleFunction } = useContext(GlobalContext)
        const {
            data,
            setData,
            input, 
            fetchStatus, 
            setFetchStatus}= state
        const {
            handleInput,
            handleSubmit,
            handleDelete,
            handleEdit,
        }= handleFunction
    
        useEffect(() => {
            if (fetchStatus === true) {
                axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
                    .then((res) => {
                    setData([...res.data])
                    })
                    .catch(() => {
                    })
                setFetchStatus(false)
                }

        }, [fetchStatus,setData, setFetchStatus])

    return(
        <><div className="mt-12 grid justify-center">
            <Table className="rounded-xl">
                <Table.Head className="!bg-purple-600 !text-white">
                    <Table.HeadCell>
                        No
                    </Table.HeadCell>
                    <Table.HeadCell>
                        NAMA
                    </Table.HeadCell>
                    <Table.HeadCell>
                        DESCRIPTION
                    </Table.HeadCell>
                    <Table.HeadCell>
                        KATEGORI
                    </Table.HeadCell>
                    <Table.HeadCell>
                        PRICE
                    </Table.HeadCell>
                    <Table.HeadCell>
                        RATING
                    </Table.HeadCell>
                    <Table.HeadCell>
                        RELEASE YEAR
                    </Table.HeadCell>
                    <Table.HeadCell>
                        SIZE
                    </Table.HeadCell>
                    <Table.HeadCell>
                        IS_ANDROID_APP
                    </Table.HeadCell>
                    <Table.HeadCell>
                        IS_IOS_APP
                    </Table.HeadCell>
                    <Table.HeadCell>
                        ACTION
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {data !== null && data.map((item, index) => 
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                        <Table.Cell>
                            {index + 1}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {item.name}
                        </Table.Cell>
                        <Table.Cell>
                            {item.description}
                        </Table.Cell>
                        <Table.Cell>
                            {item.category}
                        </Table.Cell>
                        <Table.Cell>
                            {item.price}
                        </Table.Cell>
                        <Table.Cell>
                            {item.rating}
                        </Table.Cell>
                        <Table.Cell>
                            {item.release_year}
                        </Table.Cell>
                        <Table.Cell>
                            {item.size}
                        </Table.Cell>
                        <Table.Cell>
                            {item.is_android_app}
                        </Table.Cell>
                        <Table.Cell>
                            {item.is_ios_app}
                        </Table.Cell>
                        <Table.Cell>
                            <div className="flex flex-wrap gap-2">
                                <Button color="warning" size="xs">
                                <button size="xs" value={item.id} onClick={handleEdit}>
                                    Edit
                                </button>
                                </Button>
                                <Button color = "failure" size="xs" >
                                <button size="xs" value={item.id} onClick={handleDelete}>
                                    Delete
                                </button>
                                </Button>
                            </div>
                        </Table.Cell>
                    </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    
        <div className="mt-8">
        <h1><strong>Create Game</strong></h1>
        <br/>
        <h2>Gambar Data Game</h2>
        <hr/><br/>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Image URL
                </div>
                <TextInput onChange={handleInput} value={input.image_url} name="image_url"/>
            </div>
                <h2>Data Game</h2>
                <hr></hr>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Nama
                </div>
                <TextInput onChange={handleInput} value={input.name} name="name"/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Deskripsi
                </div>
                <Textarea onChange={handleInput} type="text" value={input.description} name="description"/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Kategori
                </div>
                <TextInput onChange={handleInput} value={input.category} name="category"/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Price
                </div>
                <TextInput onChange={handleInput} value={input.price} name="price" type="number"/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Rating
                </div>
                <TextInput onChange={handleInput} value={input.rating} name="rating"/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Release Year
                </div>
                <TextInput onChange={handleInput} placeholder="2007" value={input.release_year} name="release_year"/>
            </div>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Size
                </div>
                <TextInput onChange={handleInput} value={input.size} name="size"/>
            </div>
        <br/>
        <h2>Jenis Perangkat</h2>
        <hr/>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>Android?
                </div>
                <TextInput onChange={handleInput} value={input.is_android_app} name="is_android_app" type="number" />
            </div>
            <div>
                <div className="mb-2 block">
                <Label  value=""/>IOS?
                </div>
                <TextInput onChange={handleInput} value={input.is_ios_app} name="is_ios_app" type="number" />
            </div>
            <div>
            <Button type="submit" className="">
                Submit
            </Button>
            </div>
            </form>
            
        </div>
        <div></div></>
    )
}
export default ManageData