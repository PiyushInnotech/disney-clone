import React from 'react';
import '../styles/login.css'

const Login = () => {
    return (
        <section className="container">
            <div className="content">
                <div className='loginWrapper'>
                    <img src="/images/cta-logo-one.svg" alt="" className='login-logo1' />
                    <a className='buttonLink'>GET ALL THERE</a>
                    <p className='desc'>
                        Welcome to the dummy disney+. Stream here to get all the latest and trending
                        movies and show all over the world.
                    </p>
                    <img src="/images/cta-logo-two.png" alt="" className='login-logo2' />
                </div>
                <div className='bgImage' style={{ backgroundImage: 'url("/images/login-background.jpg")' }} />
            </div>
        </section>
    );
};

export default Login;