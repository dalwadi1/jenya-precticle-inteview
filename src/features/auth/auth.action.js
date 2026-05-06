import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'https://dummyjson.com/auth/login'


export const UserLogin = createAsyncThunk(
    'user/login', async (data) => {
        try {
            const res = await axios.post(API, data)

            localStorage.setItem('token', res.data.accessToken)

            return res.data
        } catch (error) {
            console.log(error);
        }
    }
)