import { ClassSharp } from '@mui/icons-material';
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const mailsAdapter = createEntityAdapter({});

const initialState = mailsAdapter.getInitialState({
    mails: [],
    state: "idle"
}
);

export const fetchMails = createAsyncThunk(
    "mails/fetchMails", async () => {
        try {
            const response = await axios.get("https://planer-json-server.glitch.me/mails");
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
);

export const editMail = createAsyncThunk("mails/editMail", async (mail) => {
    console.log(mail);
    console.log(mail.id);
    const response = await axios.put(`https://planer-json-server.glitch.me/mails/${mail.id}`, mail);
    return response.data;
})

const mailsSlice = createSlice({
    name: "mails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMails.fulfilled, (state, action) => {
                state.diet = action.payload;
            })
            .addCase(editMail.fulfilled, mailsAdapter.updateOne)
    }
});

export default mailsSlice.reducer;