import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getRequest } from '../config/httpRequest'
import { apiUrl } from '../config/apiUrl'
import Product from '../Product/Product'

const Dashboard = () => {

    const userInfo = useSelector((state) => state.userInfo)
  
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


    console.log(cate)
    return (
        <>
            <div className='userDetais'>
                Welecom to Dashboard {userInfo?.userInfo?.message?.firstname}


            </div>

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