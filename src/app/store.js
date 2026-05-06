import { configureStore } from "@reduxjs/toolkit"
import authSlice from '../features/auth/auth.slice'
import productsSlice from '../features/product/product.slice'


export const store = configureStore({
    reducer: {
        userLogin: authSlice,
        products: productsSlice
    }
})