import React from 'react'
import { Route, useNavigate } from 'react-router-dom'

const PrivateRoute = (child) => {

    const navigate = useNavigate()
    let token = localStorage.getItem('token')

    console.log(token)

    if (!token) {
        navigate('/')
        // return null;
    }

    return child.children;
    // return <Route {...child} />;
}

export default PrivateRoute