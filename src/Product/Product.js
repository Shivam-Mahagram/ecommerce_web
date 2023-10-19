import React, { useEffect, useState } from 'react'
import { apiUrl } from '../config/apiUrl'
import { getRequest } from '../config/httpRequest'
import { useNavigate } from 'react-router-dom'

const Product = () => {

    const [product, setProduct] = useState(null)


    const navigate = useNavigate()

    useEffect(() => {
        getProduct()
    }, [])


    const getProduct = () => {
        const url = apiUrl.product.productList
        getRequest(url).then((data) => {
            console.log(data)
            setProduct(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    const fetchSingleProduct = (id) => {
        navigate(`/productDetails/${id}`)
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                {
                    product != null && product.products.map((item, id) => {
                        return (
                            <>
                                <div className='col-3'>
                                    <div className="card mb-5 ml-2" key={id * 2} onClick={() => fetchSingleProduct(item.id)}>
                                        <img src={item.thumbnail} height='180px' className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="card-title">{item.title}</h6>
                                            <p className='card-text'>&#8377; {item.price}</p>
                                            {/* <p className="card-text">{item.description}</p> */}
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Product