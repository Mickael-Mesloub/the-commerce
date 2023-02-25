import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {},
        logged: false
    },
    reducers: {
        addUser: (state, action) => {
            return {
                ...state,
                user: action.payload,
                logged: true
            }
        }
    }
})

export const {addUser} = userSlice.actions

export default userSlice.reducer