import { Button, Chip, Container, Divider, TextField } from '@mui/material'
import { green } from '@mui/material/colors';
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAddNewTaskMutation } from '../slice/apiSlice';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [addNewTask] = useAddNewTaskMutation();
  const navigate = useNavigate();

  const onTaskChange = (e) => setTitle(e.target.value);
  const handleSubmit = async () => {
    try {
      await addNewTask({
        id: nanoid(),
        title,
      }).unwrap();
      setTitle("");
      navigate("/");
      toast.success(`${title} اضافه شد`, {
        position: "top-right"
      })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Divider>
        <Chip sx={{ backgroundColor: green[600], color: "white" }} label=" افزودن کار جدید "></Chip>
      </Divider>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid size={8}>
          <TextField color='success' label="کار" onChange={onTaskChange}></TextField>
        </Grid>
        <Grid size={4}>
          <Button sx={{ backgroundColor: green[600] }} variant='contained' onClick={handleSubmit}> افزودن </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AddTask
