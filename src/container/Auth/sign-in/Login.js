import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../../apis/authApi';
import Input from '../../../components/input'
import './style.scss'

const Login = ({ openTour }) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const submitValue = async () => {
        const loginDetails = {
            'username': user,
            'password': pass
        }
        console.log("1");
        const result = await loginUser(loginDetails);
    }
    return (
        <div className='login'>
            <Input type="text" className="user" placeholder="Username" onChange={e => setUser(e.target.value)} />
            <Input type="password" className='passw' placeholder="Password" onChange={e => setPass(e.target.value)} />
            <button className='btn' onClick={submitValue}>Login</button>
            <button onClick={openTour} id='map'>Map</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));