import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navbar } from 'reactstrap'
import { getRequest } from '../config/httpRequest'
import { apiUrl } from '../config/apiUrl'
import Product from '../Product/Product'

const Dashboard = () => {

    const userInfo = useSelector((state) => state.userInfo)
    const navigate = useNavigate()

    const [cate, setCate] = useState([])

    useEffect(() => {
        getAllCate()
    }, [])


    const getAllCate = () => {
        const url = apiUrl.category.allCategoryList
        getRequest(url).then((data) => {

            setCate(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const handlelogout = () => {

        localStorage.removeItem('token')
        // navigate('/')
    }

    console.log(cate)
    return (
        <>
            <div className='userDetais'>
                Welecom to Dashboard {userInfo?.userInfo?.message?.firstname}


            </div>

            {/* <button className='btn btn-lg btn-danger' onClick={handlelogout}>Logout</button> */}

            <div className='container'>

                <div className='row'>
                    {cate?.length > 0 && cate?.map((item, i) => 
                        (
                            <>
                                <div className='col-2' key={i*3}>
                                    {item}
                                </div>

                            </>
                        )
                    )}

                </div>

                <Product />
            </div>
        </>
    )
}

export default Dashboard