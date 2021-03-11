import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
    return (
        <article className=" bg-light-blue br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className="pa4 white">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="input-container">
                            <i className="fa fa-user icon"></i>
                            <input className="input-field " type="text" placeholder="Username" name="usrnm" />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-key icon"></i>
                            <input className="input-field" type="password" placeholder="Password" name="psw" />
                        </div>
                    </fieldset>
                <div className=" ">
                    <input 
                    onClick={() => onRouteChange('home')}
                    className="b ph3 white pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in" 
                    />
                </div>
                <div className="lh-copy mt3">
                    <p onClick={() => onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
                </div>
                </form>
            </main> 
        </article> 
        );
}

export default Signin;