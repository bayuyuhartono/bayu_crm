import { useState, useEffect } from 'react'
import axios from "axios";
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [show, toggleShow] = useState(true);

    useEffect(() => {
        getProduct();
    }, []);
 
    const getProduct = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/product`);
        console.log(response.data.data)
        setProduct(response.data.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/product/delete/${id}`);
        getProduct();
    }
 
    return (
        <div>
            <Button onClick={() => navigate("/product/add")}>Add New</Button>
            <hr></hr>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Speed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { product.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.name }</td>
                            <td>{ product.speed } Mbps</td>
                            <td>
                                <Button variant="warning" onClick={() => navigate(`/product/edit/${product.id}`)}>Edit</Button>
                                {' '}
                                <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </Table>
        </div>
    )
}
 
export default ProductList