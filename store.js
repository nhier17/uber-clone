import {configureStore} from "@reduxjs/toolkit"
import navReducer from "./slices/navSlice"

// set up store
export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})