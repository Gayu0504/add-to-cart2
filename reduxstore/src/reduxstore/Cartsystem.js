import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    quantity: 0
};

const Cartsystem = createSlice({
    name: "user",
    initialState,
    reducers: {
        AddCard: (state, action) => {
            const find = state.carts.findIndex(item => item.id === action.payload.id);
            if (find >= 0) {
                state.carts[find].quantity = +1;
            }
            else {             
                state.carts = [...action.payload]
            }
        }
    }
});
export const { AddCard } = Cartsystem.actions;
export default Cartsystem.reducer;