import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    tagTypes: ["TASK", "TIME", "MAIL"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "tasks",
            providesTags: ["TASK"]
        }),
        getTask: builder.query({
            query: taskId => `tasks/${taskId}`,
        }),
        addNewTask: builder.mutation({
            query: initialTask => ({
                url: "tasks",
                method: "POST",
                body: initialTask
            }),
            invalidatesTags: ["TASK"]
        }),
        updateTask: builder.mutation({
            query: task => ({
                url: `tasks/${task.id}`,
                method: "PUT",
                body: task
            }),
            invalidatesTags: ["TASK"]
        }),
        deleteTask: builder.mutation({
            query: taskId => ({
                url: `tasks/${taskId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["TASK"]
        }),
        getTasksTime: builder.query({
            query: () => "taskstime",
            providesTags: ["TIME"]
        }),
        getTaskTime: builder.query({
            query: taskTimeId => `taskstime/${taskTimeId}`,
        }),
        addNewTaskTime: builder.mutation({
            query: initialTaskTime => ({
                url: "taskstime",
                method: "POST",
                body: initialTaskTime
            }),
            invalidatesTags: ["TIME"]
        }),
        updateTaskTime: builder.mutation({
            query: tasktime => ({
                url: `taskstime/${tasktime.id}`,
                method: "PUT",
                body: tasktime
            }),
            invalidatesTags: ["TIME"]
        }),
        deleteTaskTime: builder.mutation({
            query: taskTimeId => ({
                url: `taskstime/${taskTimeId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["TIME"]
        }),
        getmails: builder.query({
            query: () => "mails",
            providesTags: ["MAIL"]
        }),
        getmail: builder.query({
            query: mailId => `mails/${mailId}`
        }),
        updateMail: builder.mutation({
            query: mail => ({
                url: `mails/${mail.id}`,
                method: "PUT",
                body: mail
            }),
            invalidatesTags: ["MAIL"]
        })
    })
})

export const {
    useGetTasksQuery,
    useGetTaskQuery,
    useAddNewTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useGetTasksTimeQuery,
    useGetTaskTimeQuery,
    useAddNewTaskTimeMutation,
    useUpdateTaskTimeMutation,
    useDeleteTaskTimeMutation,
    useGetmailsQuery,
    useGetmailQuery,
    useUpdateMailMutation
}
    = apiSlice;