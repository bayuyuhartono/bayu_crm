import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
                email: email,
                password: password
            })
            .then(response => {
                const errors = response.data.errors || null
                if (!errors) {
                    const token  =  response.data.data.token;
                    const fullname  =  response.data.data.fullname;
                    localStorage.setItem("token", token);
                    localStorage.setItem("name", fullname);
                    alert(`Login Success, Welcome ${localStorage.getItem('name')}`)
                    window.location.href = '/';
                } else {
                    alert('Login Failed')
                    navigate("/login");
                }
            })
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <Form onSubmit={ Auth }>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
            </Form.Group>

            <Form.Group className="mb-3" controlId="speed">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>
        </Form>
    )
}
 
export default Login