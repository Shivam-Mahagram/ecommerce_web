import React from 'react'

import { BiCart } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


    const navigate= useNavigate()
    const cartItemCount = useSelector((state)=>state.cartItem.cartItem)

const showItem = ()=>{
    navigate('/cart')
}


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand" href="/">Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="nav-link active" aria-current="page" href="/">Home</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" href="/">Link</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><span className="dropdown-item" href="/">Action</span></li>
                                    <li><span className="dropdown-item" href="/">Another action</span></li>
                                    <li><hr className="dropdown-divider" href="/"/></li>
                                    <li><span className="dropdown-item" href="/">Something else here</span></li>
                                </ul>
                            </li>
                           
                        </ul>

                        <div>
                            <BiCart size={35}  onClick={showItem}/>
                            <span style={{color:'red'}}>{cartItemCount.length}</span>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar