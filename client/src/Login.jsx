import './Login.css'
import React, { useEffect } from 'react';
import { useState } from 'react'

const Login = () => {

    // State to track whether the user is in login or register mode
    const [isRegistering, setIsRegistering] = useState(false);

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

    

    return (



        <>

            <div id="loginPage">

                <div className={`loginContainer ${isRegistering ? 'register-mode' : 'login-mode'}`}>
                <form id='loginForm'>
                    {/* Conditionally render first name and last name fields in register mode */}

                    {isRegistering ? ( 
                        <>

                        {/* Code will render when user is registering */}
                            
                            <h1 className="loginH">Register</h1>
                                <label className='loginFormElement' htmlFor="firstName">First Name:</label>
                                
                                <input className='loginFormElement' type="text" id="firstName" name="firstName" required />
                           
                                <label className='loginFormElement' htmlFor="lastName">Last Name:</label>
                                <input className='loginFormElement' type="text" id="lastName" name="lastName" required />
                           
                        </>
                    ) : (
                        <h1 className="loginH">Login</h1>
                    )}

                    {/* Always render email and password fields */}

                    
                        <label className='loginFormElement' htmlFor="emailLogin">Email Address</label>
                       
                        <input className='loginFormElement' type="text" id="emailInput" />
                        <label className='loginFormElement' id="emailPasswordText" htmlFor="emailLogin">Password</label>
                       
                        <input className='loginFormElement' type="password" id="emailPassword" />
                      



                        {isRegistering ? (
                            <div id="buttonDiv">
                            <button type='submit' className='button' id='loginSubmit'>
                                <p className='buttonP' onClick={handleRegisterClick} >Register</p>
                            </button>
                            </div>
                        ) : (
                            <>
                            <div id="buttonDiv">
                                <button type='submit' className='button' id='loginSubmit'>
                                    <p className='buttonP'>Login</p>
                                </button>
                                <button type='submit' className='button' id='loginSubmit'>
                                <p className='buttonP' onClick={handleRegisterClick} >Register</p>
                            </button>
                                </div>

                                <div id="forgotButtonDiv">
                                <button type='submit' className='button' id='loginSubmit'>
                                    <p className='buttonP'>Forgot Password?</p>
                                </button>
                                </div>
                                </>
                        )}
                    </form>

                    {/* <h1 className="loginH">Register</h1>
                    <label className='loginFormElement'  for="emailRegister">Email Address</label>
                    <br id="inputBr"></br>
                    <input className='loginFormElement' type="text" id="emailInput" />
                    <label className='loginFormElement' id="emailPasswordText" for="emailLogin">Password</label>
                    <br id="inputBr"></br>
                    <input className='loginFormElement' type="password" id="emailPassword" /> */}

                </div>
            </div>


        </>
    )
}
export default Login;