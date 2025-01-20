import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slice/apiSlice";
import tasksReducer from "../slice/tasksSlice";
import tasksTimeReducer from '../slice/tasksTimeSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        tasksTime: tasksTimeReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

store.dispatch(apiSlice.endpoints.getTasks.initiate());
store.dispatch(apiSlice.endpoints.getTasksTime.initiate());