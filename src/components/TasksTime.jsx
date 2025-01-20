import { Chip, Container, Divider, Typography, IconButton} from '@mui/material'
import React, { useState } from 'react'
import { useGetTasksTimeQuery } from '../slice/apiSlice'
import TaskTime from './TaskTime';
import { purple } from '@mui/material/colors';
import { AddCircle } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const TasksTime = () => {

  const { data: taskstime, isSuccess } = useGetTasksTimeQuery();
  return (
    <Container sx={{ marginTop:"20px"}}>
      <Divider>
        <Chip sx={{ backgroundColor: purple[600], color:"white"}} label="توضیح و مدت زمان فعالیت"></Chip>
      </Divider>
      <Link to="/addTaskTime">
        <AddCircle fontSize='large' cursor="pointer" sx={{color:purple[600]}} size='large'/>
      </Link>
      {isSuccess ? (
        taskstime.map((tasktime) => (
          <TaskTime key={tasktime.id} title={tasktime.title} time={tasktime.time} id={tasktime.id} />
        ))
      ) : (
        <Typography>خطا</Typography>
      )

      }
    </Container>
  )
}

export default TasksTime
