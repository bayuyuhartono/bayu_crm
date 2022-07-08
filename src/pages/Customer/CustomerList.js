import { useState, useEffect } from 'react'
import axios from "axios"
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CustomerList = () => {
    const navigate = useNavigate()
    const [customer, setCustomer] = useState([])
    const [show, toggleShow] = useState(true)

    useEffect(() => {
        getCustomer()
    }, [])
 
    const getCustomer = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/customer`)
        console.log(response.data.data)
        setCustomer(response.data.data)
    }
 
    const deleteCustomer = async (id) => {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/customer/delete/${id}`)
        getCustomer()
    }
 
    return (
        <div>
            <Button onClick={() => navigate("/customer/add")}>Add New</Button>
            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Customer Name</th>
                        <th>NIK</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    { customer.map((customer, index) => (
                        <tr key={ customer.id }>
                            <td>{ index + 1 }</td>
                            <td>{ customer.name }</td>
                            <td>{ customer.nik }</td>
                            <td>{ customer.phone }</td>
                            <td>{ customer.address }</td>
                            <td>
                                <Button variant="warning" onClick={() => navigate(`/customer/edit/${customer.id}`)}>Edit</Button>
                                {' '}
                                <Button variant="danger" onClick={() => deleteCustomer(customer.id)}>Delete</Button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </Table>
        </div>
    )
}
 
export default CustomerList