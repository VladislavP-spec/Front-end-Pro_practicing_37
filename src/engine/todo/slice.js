import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        items: [{ id: 1, text: 'blab' }],
        loading: false,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        addItem: (state, action) => {
            state.items.push({ text: action.payload, id: uuid() })
        },
        setLoading: (state, action) => {
            state.items = action.payload
        },

    }
})

export default todoSlice;