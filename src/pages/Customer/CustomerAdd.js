import { useState } from 'react'
import axios from "axios"
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const CustomerAdd = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [nik, setNik] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const saveCustomer = async (e) => {
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/customer/add`,{
            name: name,
            nik: nik,
            phone: phone,
            address: address
        })
        navigate("/customer")
    }
 
    return (
        <Form onSubmit={ saveCustomer }>
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
 
export default CustomerAdd