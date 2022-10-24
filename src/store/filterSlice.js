import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {

        changeFilter(state, action) { 
            state.filter = action.payload;
        },
        
    }
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;
