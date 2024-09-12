import './Login.css'
import React, { useEffect } from 'react';
import { useState } from 'react'

const Login = () => {

    // State to track whether the user is in login or register mode
    const [isRegistering, setIsRegistering] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        const root = document.getElementById('root');
        const children = root.children;

        // Get the login component itself
        const loginComponent = document.getElementById('loginPage');
        const loginComponentContainer = document.querySelector('.loginContainer');

        // Apply blur to all children except the login component
        for (let i = 0; i < children.length; i++) {
            if (children[i] !== loginComponent) {
                children[i].classList.add('blurred'); // Add blur class
            }
        }
    }, []);

    // Function to handle switching to registration mode
    const handleRegisterClick = () => {
        setIsRegistering(true);
    };

    // Function to handle switching back to login mode (if needed)
    const handleBackToLoginClick = () => {
        setIsRegistering(false);
    };

    //Handle switching from register to login
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form from refreshing the page

        const endpoint = isRegistering ? '/api/register' : '/api/login'; // Determine endpoint based on form type
        const url = `http://localhost:5000${endpoint}`;  // Use the localhost:5000 as the base URL

        const data = isRegistering ? {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        } : {
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);  // Check response in the browser console
        } catch (error) {
            console.error('Error during submission:', error);
        }
    };

    return (



        <>

            <div id="loginPage">

                <div className={`loginContainer ${isRegistering ? 'register-mode' : 'login-mode'}`}>
                    <form id='loginForm' onSubmit={handleSubmit}>
                        {/* Conditionally render first name and last name fields in register mode */}

                        {isRegistering ? (
                            <>

                                {/* Code will render when user is registering */}

                                <h1 className="loginH">Register</h1>
                                <label className='loginFormElement' htmlFor="firstName">First Name:</label>

                                <input
                                    className='loginFormElement'
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required />

                                <label className='loginFormElement' htmlFor="lastName">Last Name:</label>
                                <input
                                    className='loginFormElement'
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />

                            </>
                        ) : (
                            <h1 className="loginH">Login</h1>
                        )}

                        {/* Always render email and password fields */}

                        <div className='fieldContainer'>
                            <label className='loginFormElement' htmlFor="emailLogin">Email Address</label>

                            <input
                                className='loginFormElement'
                                type="text"
                                id="emailLogin"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <label className='loginFormElement' id="emailPasswordText" htmlFor="emailPassword">Password</label>

                            <input
                                className='loginFormElement'
                                type="password"
                                id="emailPassword"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            </div>
                            <div id="buttonDiv">
                                <button type="submit" className="button">
                                    <p className="buttonP">{isRegistering ? 'Register' : 'Login'}</p>
                                </button>

                                {!isRegistering && (
                                    <button type="button" className="button" onClick={handleRegisterClick}>
                                        <p className="buttonP">Register</p>
                                    </button>
                                )}
                            </div>

                            {isRegistering && (
                                <button type="button" className="button" onClick={handleBackToLoginClick}>
                                    <p className="buttonP">&lt;</p>
                                </button>
                            )}

                    </form>
                </div>
            </div>


        </>
    )
}
export default Login;