import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
    const navigate = useNavigate();
 
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <h2>{localStorage.getItem('name')}</h2>
        </section>
    )
}
 
export default Login