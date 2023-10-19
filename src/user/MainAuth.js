import React, { useState } from "react";

import CreateUser from "./CreateUser";
import Login from "./Login";
import sideimg from '../sideimg.jpg'

const MainAuth = () => {
    const [loginStep, setLoginStep] = useState(1)

    return (
        <>
            <div className="row">
                <div className="col-7">
                    <img src={sideimg} alt="" />
                </div>
                <div className="col-5">
                    {loginStep === 1 && <Login loginStep={loginStep} setLoginStep={setLoginStep} />}
                    {loginStep === 2 && <CreateUser loginStep={loginStep} setLoginStep={setLoginStep} />}
                </div>
            </div>



        </>
    )
}

export default MainAuth;