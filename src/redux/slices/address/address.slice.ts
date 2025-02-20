import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/services/AxiosInstance";
// import {
//     GET_ADDRESS_DETAIL,
// } from "./types"


// export const getAddressDetail = createAsyncThunk(
//     GET_ADDRESS_DETAIL,
//     async (paylaod, thunkAPI) => {
//         try {
//             const response = await axiosInstance.get(`user-addresses/`);
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue({ error: error });
//         }
//     }
// );


const slice = createSlice({
    name: "address",
    initialState: {
        getAddressData: {},
        isFetching: false,
        isError: false,
    },
    reducers: {},
    // extraReducers: (builder) => {
        // builder.addCase(getAddressDetail.pending, (state) => {
        //     state.getAddressData = {};
        //     state.isFetching = true;
        //     state.isError = false;
        // });

        // builder.addCase(getAddressDetail.fulfilled, (state, action) => {
        //     state.getAddressData = action.payload;
        //     state.isFetching = false;
        //     state.isError = false;
        // });
        // builder.addCase(getAddressDetail.rejected, (state) => {
        //     state.getAddressData = {};
        //     state.isFetching = false;
        //     state.isError = true;
        // });

    // },
});

export default slice.reducer;
