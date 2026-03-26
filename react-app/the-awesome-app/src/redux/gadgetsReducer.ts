import { CartItem } from "@/models/CartItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GadgetState = {
    cart: CartItem[],
    
}
const initialState: GadgetState = {
    cart: [],
    
}

// action: {type: "addtocart", payload: CartItem}
// action: {type: "removeitem", id: 1}
// export const gadgetsReducer = (state=initialState, action) => {

//     if(action.type === "addtocart" && action.payload){

//         //state.cart.push(action.payload);
//         const cart = [...state.cart];
//         cart.push(action.payload);
//         return {
//             ...state,
//             cart: cart,
//         }    
//     }
//     return state;
// }

const gadgetsSlice = createSlice({
    name: "gadgetsSlice",
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(item => item.product.id !== action.payload);
        }
    }
})

export const gadgetsReducer = gadgetsSlice.reducer;
export const { addToCart, removeItem } = gadgetsSlice.actions;

