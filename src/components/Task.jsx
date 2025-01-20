import { Button, Checkbox, Container, ListItem } from "@mui/material";
import { ClearRounded } from '@mui/icons-material';
import { EditRounded } from '@mui/icons-material';
import { green } from "@mui/material/colors";
import { useDeleteTaskMutation } from "../slice/apiSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Task = ({ title, id }) => {
    const [deleteTask] = useDeleteTaskMutation();

    const handleDelete = async () => {
        try {
            await deleteTask(id).unwrap();
            toast.error(`${title} حذف شد`, {
                position: "top-right"
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleCheck = (e) => {
       if(e.target.checked){
        toast.success(` ${title} انجام شد `, {
            position: "top-right"
        })
       }
    }

    return (
        <Container sx={{ display: "flex", alignItems: "center", padding: "15px" }}>
            <ListItem >
                {title}
            </ListItem>
            <Checkbox disableRipple color="success" onChange={handleCheck} />
            <Link to={`/editTask/${id}`}>
                <EditRounded cursor="pointer" sx={{ color: green[600] }} />
            </Link>
            <Button onClick={handleDelete}>
                <ClearRounded cursor="pointer" color="error" />
            </Button>
        </Container>
    )
}

export default Task;
