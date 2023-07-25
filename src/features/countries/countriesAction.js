import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// show all countries
export const showAllCountries = createAsyncThunk("countries/showAll", async(_, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/all`)
    return response.data;
    
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;
    // reject with value and send error message as payload
    return thunkAPI.rejectWithValue(message);
  }
})

// search by cioc
export const searchByCode = createAsyncThunk("countries/searchByCode", async(code, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;
    // reject with value and send error message as payload
    return thunkAPI.rejectWithValue(message);
  }
})

// search by region
export const searchByRegion = createAsyncThunk("countries/searchByRegion", async(region, thunkAPI) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
    return response.data
  } catch (error) {
    const message = (error.response && error.response.data) || error.message;
    // reject with value and send error message as payload
    return thunkAPI.rejectWithValue(message);
  }
})