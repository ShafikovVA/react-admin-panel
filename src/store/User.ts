import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IUser from '../models/IUser';
import axios from 'axios';

const initialState: IUser = {
    email: '',
    name: '',
    password: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    },
  })