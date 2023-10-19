import React, { useState } from "react";
import { postRequest } from "../config/httpRequest";
import { apiUrl } from "../config/apiUrl";
import toast from "react-hot-toast";

const CreateUser = ({ loginStep, setLoginStep }) => {

    const [input, setInput] = useState('') 


    const handleInput = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }
    
    
    const submithandler = () => {

        const url = apiUrl.createUser
    
        postRequest(url, input).then((data) => {

            if (data.statuscode === 200) {
                toast.success('Always at the bottom.')
            } else if (data.statuscode === 500) {
                toast.error(data.message)
            }

        }).catch((err) => {
            console.log(err)

        })
    }

    const handleRedirect = () => {
        setLoginStep(1)
    }

    return (
        <>

            <form>
                <div className="row">
                    <div className="col-8 mb-2 mt-2">
                        <label className="form-label" for="firstname:">First Name</label>
                        <input className="form-control inputStyle" name="firstname" type="text" id="firstName" onChange={handleInput} />
                    </div>
                    <div className="col-8 mb-2">
                        <label className="form-label" for="lastname">Last Name</label>
                        <input className="form-control inputStyle" name="lastname" type="text" id="lastName" onChange={handleInput} />
                    </div>
                    <div className="col-8 mb-2">
                        <label className="form-label" for="email">Email</label>
                        <input className="form-control inputStyle" name="email" type="text" id="email" onChange={handleInput} />
                    </div>
                    <div className="col-8 mb-2">
                        <label className="form-label" for="mobile">Mobile Number</label>
                        <input className="form-control inputStyle" name="mobile" type="text" id="mobile" onChange={handleInput} />
                    </div>

                </div>
                <button type="button" className="btn btn-primary" onClick={submithandler}>Submit</button>

                <span className="spanStyle" onClick={handleRedirect}>Already SignUp ...</span>
            </form>
          

        </>
    )
}

export default CreateUser