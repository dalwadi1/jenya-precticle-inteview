import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./product.action"


const initialState = {
    loading: false,
    products: null
}

const productsSlice = createSlice({
    name: "productSlice",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
            })

            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })

            .addCase(getProducts.rejected, (state) => {
                state.loading = false
            })
    }
})

export default productsSlice.reducer