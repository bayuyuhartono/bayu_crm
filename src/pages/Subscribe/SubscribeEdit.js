/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
 
const SubscribeEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [speed, setSpeed] = useState('');
 
    const updateSubscribe = async (e) => {
        e.preventDefault();
        await axios.patch(`${process.env.REACT_APP_SERVER_URL}/subscribe/update`,{
            subscribe_id: id,
            name: name,
            speed: speed
        });
        navigate("/subscribe");
    }
 
    useEffect(() => {
        getSubscribeById();
    }, []);
 
    const getSubscribeById = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/subscribe/show/${id}`);
        setName(response.data.data.name);
        setSpeed(response.data.data.speed);
    }
 
    return (
        <Form onSubmit={ updateSubscribe }>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Subscribe Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Subscribe name" value={ name } onChange={ (e) => setName(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="speed">
                <Form.Label>Speed</Form.Label>
                <Form.Control type="number" placeholder="Enter speed" value={ speed } onChange={ (e) => setSpeed(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>
            {' '}
            <Button variant="secondary" onClick={() => navigate("/subscribe")}> Cancel </Button>
        </Form>
    )
}
 
export default SubscribeEdit