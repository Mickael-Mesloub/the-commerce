import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        email: '',
        logged: null
        
    },
    reducers: {
        loginUser: (state, action) => {
            console.log(action)
            return {
                ...state,
                email: action.payload.email,
                logged: true
            }
        },
        logoutUser: (state) => {
            return {
                ...state,
                email: '',
                logged: null
            }
        }
    }
})

export const {loginUser, logoutUser} = userSlice.actions

export default userSlice.reducer