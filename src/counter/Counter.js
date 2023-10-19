import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";


const Counter = () => {
    const count = useSelector((state) => state.count)

    const dispatch = useDispatch()


    return (
        <>
            <span onClick={() => dispatch(increment())}>+</span>
            {`count : ${count.value}`}
            <span onClick={() => dispatch(decrement())}>-</span>

        </>
    )
}

export default Counter;