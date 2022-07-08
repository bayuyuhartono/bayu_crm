import { useState, useEffect } from 'react'
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const SubscribeAdd = () => {
    const navigate = useNavigate();
    const [customerDrop, setCustomerDrop] = useState([]);
    const [productDrop, setProductDrop] = useState([]);
    const [customer, setCustomer] = useState('');
    const [product, setProduct] = useState('');

    useEffect(() => {
        getCustomer();
        getProduct();
    }, []);

    const saveSubscribe = async (e) => {
        e.preventDefault();
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/subscribe/add`,{
            customer_id: customer,
            product_id: product
        });
        navigate("/subscribe")
    }

    const getProduct = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product`);
        console.log(response.data.data)
        setProductDrop(response.data.data);
    }

    const getCustomer = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/customer`);
        console.log(response.data.data)
        setCustomerDrop(response.data.data);
    }
 
    return (
        <Form onSubmit={ saveSubscribe }>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Customer Name</Form.Label>
                <Form.Select aria-label="Default select example" onChange={ (e) => setCustomer(e.target.value) }>
                    <option>Open this select menu</option>
                    {!customerDrop ? null : 
                        customerDrop.map((customerDrop, index) => ( 
                            <option value={customerDrop.id} >{customerDrop.name}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Product</Form.Label>
                <Form.Select aria-label="Default select example" onChange={ (e) => setProduct(e.target.value) }>
                    <option>Open this select menu</option>
                    {!productDrop ? null : 
                        productDrop.map((productDrop, index) => ( 
                            <option value={productDrop.id} >{productDrop.name}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>
            {' '}
            <Button variant="secondary" onClick={() => navigate("/subscribe")}> Cancel </Button>
        </Form>
    )
}
 
export default SubscribeAdd