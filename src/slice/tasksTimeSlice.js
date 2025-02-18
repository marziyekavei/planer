import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

const tasksTimeAdapter = createEntityAdapter({});

const initialState = tasksTimeAdapter.getInitialState({
    taskstime: [],
    state: "idle"
})

export const fetchTasksTime = createAsyncThunk("taskstime/fetchTasksTime", async () => {
    try {
        const response = await axios.get("https://planer-json-server.glitch.me/taskstime");
        return response.data;
    } catch {
        console.log(err);
    }
}
);

export const addTaskTime = createAsyncThunk("taskstime/addTaskTime", async () => {
    const response = await axios.post("https://planer-json-server.glitch.me/taskstime");
    return response.data;
});

export const updateTaskTime = createAsyncThunk("taskstime/updateTaskTime", async (taskTime) => {
    const response = await axios.put(`https://planer-json-server.glitch.me/taskstime/${taskTime.id}`, taskTime);
    return response.data;
});

export const deleteTaskTime = createAsyncThunk("taskstime/deleteTaskTime", async () => {
    const response = await axios.delete("https://planer-json-server.glitch.me/taskstime");
    return response.data;
});

const tasksTimesSlice = createSlice({
    name: "taskstime",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksTime.fulfilled, (state, action) => {
                state.taskstime = action.payload;
            })
            .addCase(addTaskTime.fulfilled, tasksTimeAdapter.addOne)
            .addCase(updateTaskTime.fulfilled, tasksTimeAdapter.updateOne)
            .addCase(deleteTaskTime.fulfilled, tasksTimeAdapter.removeOne)
    }
})

export default tasksTimesSlice.reducer;

