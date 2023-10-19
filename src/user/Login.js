import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postRequest } from '../config/httpRequest'
import { apiUrl } from '../config/apiUrl'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../redux/userSlice'


const Login = ({ loginStep, setLoginStep }) => {

    const [input, setInput] = useState({})

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const redirectCreateUSer = () => {
        setLoginStep(2)
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const formSubmitHandler = () => {

        const url = apiUrl.login

        postRequest(url, input).then((data) => {

            dispatch(setUserInfo(data))
            localStorage.setItem('userData', JSON.stringify(data))
            localStorage.setItem('token', data.message.token)
            navigate('/dashboard')
        }).catch((err) => {
            console.log(err)
        })
    }


    return (

        <>
            <div className="row">
                <div className="col-8">
                    <div className="form-group">
                        <label for='email'>Email:</label>
                        <input type="text" name="email" className="form-control inputStyle" id="email" onChange={handleInput} />
                    </div>

                </div>

                <div className="col-8 mb-2">
                    <div className="form-group">
                        <label for='password'>Password</label>
                        <input type="password" name="password" className="form-control inputStyle" id="password" onChange={handleInput} />
                    </div>
                </div>
                <div className="col-8">
                    <button className="btn btn-primary" onClick={formSubmitHandler}> Submit</button>
                    <span className='spanStyle' onClick={redirectCreateUSer}>new user register ?</span>
                </div>
            </div>
        </>

    )
}

export default Login