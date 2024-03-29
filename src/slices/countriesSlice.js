import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCountries(state, action) {
            state.push(...action.payload);
        },
    },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
