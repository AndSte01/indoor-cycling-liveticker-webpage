import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    status: 'idle',
    error: null
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
    extraReducers(builder) {
        builder
            .addCase(reset.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.value = action.payload;
            })
    }
})

// dummy delay function
let f1 = function () {
    return new Promise(async function (res, err) {
        let x = 1;
        let p = new Promise(function (res, err) {
            setTimeout(function () {
                x = 0;
                res(x);
            }, 1000)
        })
        p.then(function (x) {
            console.log(x);
            res(x);
        })
    });
}

// reset counter but take your time to do so
export const reset = createAsyncThunk('counter/reset', async () => {
    const response = await f1()
    return response
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer