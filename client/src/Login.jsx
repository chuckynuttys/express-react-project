import './Login.css'
import React, { useEffect } from 'react';
import { useState } from 'react'

const Login = ({ onSuccessfulLogin }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleRegisterClick = () => {
        setIsRegistering(true);
    };

    const handleBackToLoginClick = () => {
        setIsRegistering(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isRegistering ? '/api/register' : '/api/login';
        const url = `http://localhost:5000${endpoint}`;

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

            if (!response.ok) {
                setErrorMessage(result.message);
                setLoginFailed(true);
                setFormData({
                    ...formData,
                    password: '' // Clear the password field
                });
            } else {
                setIsAuthenticated(true);
                setErrorMessage('');
                setLoginFailed(false);
                console.log('Success:', result);
                localStorage.setItem('token', result.token);
                onSuccessfulLogin(); // Call the success handler from props
            }
        } catch (error) {
            console.error('Error during submission:', error);
        }
    };
    return (



        <>

            <div id="loginPage">
                {loginFailed && (

                    <>
                        <div id="loginFailed">
                        {errorMessage && <h1 className='error'>{errorMessage}</h1>} {/* Show error message */}
                        </div>
                    </>

                )}

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
                        <div className='fieldContainer'>
                            <p className='forgotPassword'> Forgot your password?</p>
                        </div>
                        <div className='fieldContainer'>
                            <p className='rememberMe'>Keep me signed in?</p>
                        </div>
                        <div id="buttonDiv">
                            <button type="submit" className="button">
                                <p className="buttonP">{isRegistering ? 'Register' : 'Login'}</p>
                            </button>


                            {!isRegistering && (
                                <>
                                    <div className='divider'>

                                    </div>
                                    <button type="button" className="button" onClick={handleRegisterClick}>
                                        <p className="buttonP">Register</p>
                                    </button>
                                </>



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