import { createSlice } from "@reduxjs/toolkit";


export const userSlice = new createSlice({
    name: 'userInfo',
    initialState: {
        userInfo: null
    },
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})

export const { setUserInfo } = userSlice.actions

export default userSlice

