import { useState } from 'react'
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ProductAdd = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');

    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/product/add`,{
            name: name,
            speed: speed
        });
        navigate("/product")
    }
 
    return (
        <Form onSubmit={ saveProduct }>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product name" value={ name } onChange={ (e) => setName(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="speed">
                <Form.Label>Speed</Form.Label>
                <Form.Control type="number" placeholder="Enter speed" value={ speed } onChange={ (e) => setSpeed(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>
            {' '}
            <Button variant="secondary" onClick={() => navigate("/product")}> Cancel </Button>
        </Form>
    )
}
 
export default ProductAdd