import { createSlice } from "@reduxjs/toolkit"

// creates your actions as well as your reducer for you,
const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) =>{
            state.origin = action.payload;
        },
        setDestination: (state, action) =>{
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) =>{
            state.travelTimeInformation = action.payload;
        },
    },
});
export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions
//selectors
export const slectOrigin = (state) => state.nav.origin;
export const slectDestination = (state) => state.nav.destination;
export const slectTravelRimeInformaation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;