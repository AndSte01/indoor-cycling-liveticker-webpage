// redux basics
import { configureStore } from "@reduxjs/toolkit"

// reducers
import counterReducer from "./features/counterSlice"
import navbarReducer from "./features/navbarSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        navbar: navbarReducer,
    },
})