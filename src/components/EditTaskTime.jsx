import { Button, Chip, Container, Divider, TextField } from '@mui/material';
import { purple } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetTaskTimeQuery, useUpdateTaskTimeMutation } from '../slice/apiSlice';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const EditTaskTime = () => {

    const { taskTimeId } = useParams();

    const { data: taskTime, refetch } = useGetTaskTimeQuery(taskTimeId);

    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    const [updateTaskTime] = useUpdateTaskTimeMutation();

    useEffect(() => {
        if (taskTime) {
            setTitle(taskTime.title);
            setTime(taskTime.time);
        }
    }, [taskTime]);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onTimeChange = (e) => setTime(e.target.value);

    const navigate = useNavigate();

    const handleEdit = async () => {
        const editedTaskTime = {
            id: taskTimeId,
            title,
            time
        };
        if (time && title) {
            await updateTaskTime({ ...editedTaskTime });
            refetch();
            navigate("/");
            toast.info(`${title} ویرایش شد`, {
                position:"top-right"
            })
        }
    }

    return (
        <Container>
            <Divider>
                <Chip sx={{ backgroundColor: purple[600], color: "white" }} label=" ویرایش توضیح و مدت زمان فعالیت "></Chip>
            </Divider>
            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                <Grid>
                    <TextField color='secondary' label="فعالیت" value={title} onChange={onTitleChange}></TextField>
                </Grid>
                <Grid>
                    <TextField color='secondary' label="مدت زمان" value={time} onChange={onTimeChange}></TextField>
                </Grid>
                <Grid>
                    <Button sx={{ backgroundColor: purple[600] }} variant='contained' onClick={handleEdit}> ویرایش </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EditTaskTime
