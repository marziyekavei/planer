import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

const tasksAdapter = createEntityAdapter({});

const initialState = tasksAdapter.getInitialState(
    {
        tasks: [],
        state: "idle",
    }
);

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    try {
        const response = await axios.get("http://localhost:9000/tasks");
        return response.data;
    } catch {
        console.log("err")
    }
});

export const addNewTask = createAsyncThunk("tasks/addNewTask", async () => {
    const response = await axios.post("http://localhost:9000/tasks");
    return response.data;
});

export const editTask = createAsyncThunk("tasks/editTask", async (task) => {
    const response = await axios.put(`http://localhost:9000/tasks/${task.id}`, task);
    return response.data;
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async () => {
    const response = await axios.delete("http://localhost:9000/tasks");
    return response.data;
});

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
                state.state = "succsses"
            })
            .addCase(addNewTask.fulfilled, tasksAdapter.addOne)
            .addCase(editTask.fulfilled, tasksAdapter.updateOne)
            .addCase(deleteTask.fulfilled, tasksAdapter.removeOne)
    }
})

export default tasksSlice.reducer;