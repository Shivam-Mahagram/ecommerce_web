import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cartItem = useSelector((state) => state.cartItem.cartItem)

    const navigate = useNavigate()

    const dispatch = useDispatch()


    const removeItems1 = (id) => {
        dispatch(removeItem(id))
        // if (cartItem.length == 0) {
        //     navigate('/dashboard')
        // }
    }

    useEffect(() => {
        if (cartItem.length === 0) {
            navigate('/dashboard')
        }
    }, [cartItem])

    return (
        <div className='container mt-5'>
            {
                cartItem.length > 0 && cartItem.map((item, id) => (
                    <div key={id * 5}>
                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.thumbnail} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <div className='removeCart'>
                                            <p className="card-text">{item.price}</p>
                                            <button onClick={() => removeItems1(item.id)} style={{ padding: '5px', borderRadius: '10px', color: '#fff', backgroundColor: 'red', border: '0px' }}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }






        </div>
    )
}

export default Cart