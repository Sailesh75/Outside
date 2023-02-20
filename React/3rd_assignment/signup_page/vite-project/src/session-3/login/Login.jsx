import React from 'react';

const Login = () =>{
    return(
        <>
        <div className='login'>
            <div className="login_container">
                <figure>
                    <img src='logo.png' alt='company_logo'/>
                </figure>
                <p className='login_title'>Dashboard Kit</p>
                <p className='login_text'>Log In to Dashboard Kit</p>
                <p className='login_value'>Enter your email and password</p>
                <div className="form">
                    <form action="#">
                        <label for="email">Email:</label><br/>
                        <input type="text" id="email" name="email" value="Email address"/><br/>
                        <label for="password">Password:</label><br/>
                        <input type="text" id="password" name="password" value="Password"/><br/>
                        <input type="submit" value="Log in"/>
                    </form> 
                </div>
            </div>
        </div>
        </>
    )
}


export default Login;