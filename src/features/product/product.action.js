import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://dummyjson.com/products?limit=10'

export const getProducts = createAsyncThunk(
    'product/getProducts', async () => {
        try {
            const res = await axios.get(API)
            console.log(res.data.products);

            return res.data.products
        } catch (error) {

        }
    }
)