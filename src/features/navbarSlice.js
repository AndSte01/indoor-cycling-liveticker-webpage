import { createSlice } from '@reduxjs/toolkit'


export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        title: "Hallo Welt",
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTitle } = navbarSlice.actions

export default navbarSlice.reducer