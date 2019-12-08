import React, { Fragment, useState  } from 'react';
import {Link, Redirect } from 'react-router-dom';

import { Auth } from "aws-amplify";

const Login = (props) => {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    })

    const {  email, password} = formData;

    const onChange = e=> setFormData({ ...formData,[e.target.name]: e.target.value })

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          await Auth.signIn(email, password);
          props.userHasAuthenticated(true);
        } catch (e) {
          alert(e.message);
        }
    }

    if(props.isAuthenticated){
        return <Redirect to='/' />
    }
    return (
        <Fragment>
            <h1 className='large tex-primary'>Login</h1>
            <p className='lead'>Sign in to your account</p>

            <form className='form' onSubmit={handleSubmit} >
                <div className='form-group'>
                    <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={e => onChange(e)} />
                </div>
                <div className='form-group'>
                    <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={e=> onChange(e)} />
                </div>
                <input type='submit' className='btn btn-primary' value='login' disabled={!validateForm} />
            </form>
        </Fragment>
    )
}

export default Login
