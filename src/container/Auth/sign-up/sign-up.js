import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Input from '../../../components/input'
import { SignUpUser } from '../../../apis/authApi';
import './style.scss'


const SignUp = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const submitValue = async () => {
        const signUpDetails = {
            'username': user,
            'password': pass
        }
        const result = await SignUpUser(signUpDetails);
    }
    return (
        <div className='signup'>
            <Input type="text" className="user" placeholder="Username" onChange={e => setUser(e.target.value)} />
            <Input type="password" className='passw' placeholder="Password" onChange={e => setPass(e.target.value)} />
            <button className='btn' onClick={submitValue}>Sign Up</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loading: state.loader.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));