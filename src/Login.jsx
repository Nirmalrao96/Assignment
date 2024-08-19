import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/Login', {
                email,
                password
            });
    
            if (response.status === 200) {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
    
                navigate('/Homepage');
            } else {
                alert('Login failed');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message);
            } else {
                console.error('Error during login:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };
    
    return (
        <div className="main">
            <div className='Loginmain'>
                <div className="left">
                    <h1>Assignment</h1>
                    <h3>React website</h3>
                </div>
                <div className="right">
                    <div className="login">
                        <form onSubmit={submit}>
                            <h6>Email</h6>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email'
                                required
                            />
                            <h6>Password</h6>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                required
                            />
                            <br /><br />
                            <input type="submit" value="Login" className='loginbtn' />
                        </form>
                    </div>
                    <div className="switch">
                    <h5>already have account</h5>
                    <Link to='/'>Signup</Link>
                    </div>
                </div>
            </div>
            <div className="footer">
            <Footer/>
            </div>
        </div>
    );
}
