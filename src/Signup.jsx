import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Signup() {
    const [usn, setUsn] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); 

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/Signin', {
                usn,
                name,
                email,
                phone,
                password
            });
    
            if (response.status === 201) {
           
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
    
                navigate('/Homepage');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message);
            } else {
                console.error('Error during registration:', error);
                alert('An error occurred. Please try again.');
            }
        }
    };
    
    return (
        <div className="main">
            <div className='signupmain'>
                <div className="left">
                    <h1>Assignment</h1>
                    <h3>React website</h3>
                </div>
                <div className="right">
                    <div className="signup">
                        <form onSubmit={submit}>
                            <h6>USN</h6>
                            <input
                                type="text"
                                onChange={(e) => setUsn(e.target.value)}
                                placeholder='Enter your user USN'
                                name=""
                                id=""
                            />
                            <h6>Name</h6>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Enter your user name'
                                name=""
                                id=""
                            />
                            <h6>Email</h6>
                            <input
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your user email'
                                name=""
                                id=""
                            />
                            <h6>Phone</h6>
                            <input
                                type="text"
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Enter your phone number'
                                name=""
                                id=""
                            />
                            <h6>Password</h6>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter password'
                                name=""
                                id=""
                            />
                            <br /><br />
                            <input type="submit" value="Submit" className='loginbtn' />
                        </form>
                    </div>
                    <div className="switch">
                    <h5>already have account</h5>
                    <Link to='/Login'>Login</Link>
                    </div>
                </div>
            </div>
            <div className="footer">
            <Footer/>
            </div>
        </div>
    );
}
