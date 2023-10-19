import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getRequest } from '../config/httpRequest'
import { apiUrl } from '../config/apiUrl'
import ImgCarousel from './ImgCarousel'
import StarRating from './StarRating'
import { BsCart } from 'react-icons/bs';
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'

const ProductDes = () => {

    const [product, setProduct] = useState('')
    const { id } = useParams()
    

    const dispatch = useDispatch()

    const getProdDetails = () => {
        const url = apiUrl.product.singleProduct
        getRequest(`${url}/${id}`).then((data) => {
            setProduct(data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProdDetails()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    

    const addToCart = (product1) => {

        dispatch(addItem(product1))
        // navigate('/cart')

    }
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-7 col-sm-12 '>
                        {/* <img src={product.images[0]} /> */}

                        <ImgCarousel images={product.images} />
                    </div>

                    <div className='col-md-5 col-12 productDetails'>
                        <div>
                            <h6>Category Name: {product?.category}</h6>
                            <h6>Product Name : {product?.title}</h6>
                            <h6>Brand Name : {product?.brand}</h6>
                            <h6>Desc : {product?.description}</h6>
                            <h6>Amount : &#8377; {product?.price}</h6>


                            <p>Rating: {product.rating}</p>
                            <StarRating rating={product.rating} />
                            <div className='mt-3'>
                                <button className='btn btn-lg btn-light' onClick={()=>addToCart(product)}><BsCart size={30} /> Add To Cart</button>
                            </div>


                            <Link to='/dashboard'>Back to Dashboard</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDes