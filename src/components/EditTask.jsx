import { Button, Chip, Container, Divider, TextField } from '@mui/material'
import { green } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTaskQuery, useUpdateTaskMutation } from '../slice/apiSlice';
import { toast } from 'react-toastify';

const EditTask = () => {
    const { taskId } = useParams();

    const { data: task, refetch } = useGetTaskQuery(taskId);
    const [title, setTitle] = useState('');
    const [updateTask] = useUpdateTaskMutation();
    useEffect(() => {
        if (task) {
            setTitle(task.title)
        }
    }, [task])
    const onTitleChange = (e) => setTitle(e.target.value);

    const navigate = useNavigate();

    const handleEdit = async () => {
        const updatedTask = {
            id: taskId,
            title
        };
        if (title) {
            await updateTask({ ...updatedTask });
            refetch();
            navigate("/")
            toast.info(`${title} ویرایش شد`, {
                position: "top-right"
            })
        }
    }
    return (
        <Container>
            <Divider>
                <Chip sx={{ backgroundColor: green[600], color: "white" }} label=" ویرایش کار "></Chip>
            </Divider>
            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                <Grid size={8}>
                    <TextField color='success' label="کار" value={title} onChange={onTitleChange}></TextField>
                </Grid>
                <Grid size={4}>
                    <Button sx={{ backgroundColor: green[600] }} variant='contained' onClick={handleEdit}
                    >
                        ویرایش
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EditTask
