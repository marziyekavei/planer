import { Chip, Container, Divider, IconButton, Typography } from "@mui/material";
import { useGetTasksQuery } from '../slice/apiSlice'
import Task from "./Task";
import { green } from "@mui/material/colors";
import {AddCircle} from '@mui/icons-material';
import { Link } from "react-router-dom";

const Tasks = () => {
  const { data: tasks, isSuccess } = useGetTasksQuery();

  return (
    <Container>
      <Divider>
        <Chip sx={{backgroundColor:green[600], color:"white"}}  label="لیست کارها"></Chip>
      </Divider>
      <Link to="/addTask">
      <AddCircle cursor="pointer" sx={{color:green[600]}} fontSize="large"/>
      </Link>
      {isSuccess ? (

        tasks.map((task) => (
          <Task key={task.id} title={task.title} id={task.id}/>
        ))

      ) : (
        <Typography>خطا </Typography>
      )
      }

    </Container>
  )
}

export default Tasks
