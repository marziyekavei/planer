import { Button, Container, ListItem } from '@mui/material'
import React from 'react';
import { ClearRounded } from '@mui/icons-material';
import { EditRounded } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { useDeleteTaskTimeMutation } from '../slice/apiSlice';
import { toast } from 'react-toastify';

const TaskTime = ({ title, time, id }) => {

  const [deleteTaskTime] = useDeleteTaskTimeMutation();

  const handleDelete = async () => {
    try {
      await deleteTaskTime(id).unwrap();
       toast.error(`${title} حذف شد`, {
                      position:"top-right"
                  })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container sx={{ display: "flex", alignItems: "center", padding: "15px"}}>
      <ListItem sx={{whiteSpace:"nowrap"}}>{title}</ListItem>
      <ListItem sx={{whiteSpace:"nowrap"}}>{time}</ListItem>
      <Link to={`/editTaskTime/${id}`}>
        <EditRounded cursor="pointer" sx={{ color: purple[600] }} />
      </Link>
      <Button onClick={handleDelete}>
        <ClearRounded cursor="pointer" color='error' />
      </Button>
    </Container>
  )
}

export default TaskTime
