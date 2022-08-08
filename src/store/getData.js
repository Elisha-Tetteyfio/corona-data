import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://corona-api.com/countries';
const GET_DATA = 'coronoa-data/GET_DATA';

export const fetchData = createAsyncThunk(GET_DATA, async () => {
  const result = await fetch(url);
  const resultJson = await result.json();
  return resultJson.data;
});

const dataSlice = createSlice({
  name: 'corona-data',
  initialState: [{ name: '', code: '', latest_data: { confirmed: '', deaths: '', recovered: '' } }],
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => action.payload,
  },
});

// export const { } = dataSlice.actions;
export default dataSlice.reducer;
