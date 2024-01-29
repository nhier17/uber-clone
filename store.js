import { configureStore } from "@reduxjs/toolkit"
import navReducer from "./slices/navSlices"

// set up store
export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})