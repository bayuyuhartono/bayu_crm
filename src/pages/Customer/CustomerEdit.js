/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios"
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
 
const CustomerEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [name, setName] = useState('')
    const [nik, setNik] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
 
    const updateCustomer = async (e) => {
        e.preventDefault()
        await axios.patch(`${process.env.REACT_APP_SERVER_URL}/customer/update`,{
            customer_id: id,
            name: name,
            nik: nik,
            phone: phone,
            address: address
        })
        navigate("/customer")
    }
 
    useEffect(() => {
        getCustomerById()
    }, [])
 
    const getCustomerById = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/customer/show/${id}`)
        setName(response.data.data.name)
        setNik(response.data.data.nik)
        setPhone(response.data.data.phone)
        setAddress(response.data.data.address)
    }
 
    return (
        <Form onSubmit={ updateCustomer }>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Customer name" value={ name } onChange={ (e) => setName(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nik">
                <Form.Label>NIK</Form.Label>
                <Form.Control type="number" placeholder="Enter nik" value={ nik } onChange={ (e) => setNik(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Customer Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Customer phone" value={ phone } onChange={ (e) => setPhone(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Customer Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Customer name" value={ address } onChange={ (e) => setAddress(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>
            {' '}
            <Button variant="secondary" onClick={() => navigate("/customer")}> Cancel </Button>
        </Form>
    )
}
 
export default CustomerEdit