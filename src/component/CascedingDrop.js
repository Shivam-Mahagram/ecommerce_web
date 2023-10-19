import React, { useState } from 'react'

import { stateData } from './StateData'
import './cascading.css'

const CascedingDrop = () => {


    const [selectedState, setSelectedState] = useState([])



    const handelState = (e) => {
        const state = e.target.value
        setSelectedState(stateData[state])

    }

    return (
        <>
            <div className='main'>

                <div className='select'>
                    <label>State:</label>
                    <select name='state' className='state' onChange={handelState}>
                        <option value=''>Select State</option>
                        {
                            Object.keys(stateData).map((item, id) =>
                            (
                                <option value={item} key={id * 3}>{item}</option>
                            )
                            )
                        }

                    </select>
                </div>
                <div className='select'>
                    <label>City:</label>
                    <select name='city' className='city'>
                        <option value=''>Select City</option>
                        {selectedState.length > 0 && selectedState.map((item, id) => (
                            <option value={item}>{item}</option>
                        ))}

                    </select>
                </div>

            </div>
        </>
    )
}

export default CascedingDrop