import { useState, useEffect } from 'react'
import axios from "axios"
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SubscribeList = () => {
    const navigate = useNavigate()
    const [subscribe, setSubscribe] = useState([])
    const [show, toggleShow] = useState(true)

    useEffect(() => {
        getSubscribe()
    }, [])
 
    const getSubscribe = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/subscribe`)
        console.log(response.data.data)
        setSubscribe(response.data.data)
    }

    const listSub = (data) => {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((value, index) => (
                        <tr key={ value.subscribe_id }>
                            <td>{ index + 1 }</td>
                            <td>{ value.product_name } - {value.speed}Mbps</td>
                            <td><Button variant="danger" size="sm" onClick={() => deleteSubscribe(value.subscribe_id)}>Delete</Button></td>
                        </tr>
                    )) }
                     
                </tbody>
            </Table>
        )
    }

    const deleteSubscribe = async (id) => {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/subscribe/delete/${id}`);
        getSubscribe();
    }
 
    return (
        <div>
            <Button onClick={() => navigate("/subscribe/add")}>Add New</Button>
            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Customer Name</th>
                        <th>Product</th>
                    </tr>
                </thead>
                <tbody>
                    { subscribe.map((subscribe, index) => (
                        <tr key={ subscribe.subscribe_id }>
                            <td>{ index + 1 }</td>
                            <td>{ subscribe.customer_name }</td>
                            <td>{ listSub(subscribe.subscribe) }</td>
                        </tr>
                    )) }
                     
                </tbody>
            </Table>
        </div>
    )
}
 
export default SubscribeList