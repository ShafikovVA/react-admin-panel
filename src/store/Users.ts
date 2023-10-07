import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IUsers from '../models/IUsers';
import axios from 'axios';
import { API_HOST } from '../config';

export const getAll = createAsyncThunk<IUsers, undefined, {rejectValue: string}>(
    'users/getAll',
    async (state)=>{
        const response = await axios.get(API_HOST+'api/user/all');
        return response.data;
    }
)

const initialState: IUsers = {
    users: [],
    loaded: true,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: 
        (builder) => {
            builder.addCase(getAll.pending, (state)=>{
                state.loaded = true;
            });
            builder.addCase(getAll.fulfilled, (state, action)=>{
                state.loaded = false;
                state.users = action.payload;
            });
        }
  })

export default usersSlice.reducer;