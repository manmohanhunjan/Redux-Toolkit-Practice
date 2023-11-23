import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
            { id: 3, name: 'John Smith' },
            { id: 4, name: 'Jane Smith' },
        ],
    },
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.user = state.user.filter((user) => user.id !== action.payload)
        },
    },
})

export const { addUser, deleteUser } = userSlice.actions
export default userSlice.reducer
