import { Button, Chip, Container, Divider, TextField } from '@mui/material'
import { purple } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddNewTaskTimeMutation } from '../slice/apiSlice';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const AddTaskTime = () => {

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const [addNewTaskTime] = useAddNewTaskTimeMutation();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onTimeChange = (e) => setTime(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await addNewTaskTime({
        id: nanoid(),
        title,
        time
      }).unwrap();
      setTime("");
      setTitle("");
      navigate("/");
      toast.success(`${title}  اضافه شد`, {
        position:"top-right"
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Divider>
        <Chip sx={{ backgroundColor: purple[600], color: "white" }} label=" افزودن توضیح و مدت زمان فعالیت جدید "></Chip>
      </Divider>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid>
          <TextField color='secondary' label="فعالیت" onChange={onTitleChange}></TextField>
        </Grid>
        <Grid>
          <TextField color='secondary' label="مدت زمان" onChange={onTimeChange}></TextField>
        </Grid>
        <Grid>
          <Button sx={{ backgroundColor: purple[600] }} variant='contained' onClick={handleSubmit}> افزودن </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddTaskTime;
