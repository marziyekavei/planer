import { Button, Chip, Container, Divider, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";
import Grid from '@mui/material/Grid2';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetmailQuery, useUpdateMailMutation } from "../slice/apiSlice";
import { toast } from "react-toastify";


const EditMails = () => {

    const { mailId } = useParams();

    const { data: mail, refetch } = useGetmailQuery(mailId);

    const [status, setStatus] = useState();
    const [title, setTitle] = useState();
    const [updateMail] = useUpdateMailMutation();

    useEffect(() => {
        if (mail) {
            setStatus(mail.status);
            setTitle(mail.title)
        }
    }, [mail]);

    const onStatusChange = (e) => setStatus(e.target.value);
    const onTitleChange = (e) => setTitle(e.target.value);


    const navigate = useNavigate();

    const handleEdit = async () => {
        const editedMail = {
            id: mailId,
            title,
            status
        };
        if (status && title) {
            await updateMail({ ...editedMail });
            refetch();
            navigate("/");
            toast.info(" وضعیت وعده غذایی ویرایش شد ", {
                position: "top-right"
            })
        }
    }
    return (
        <Container>
            <Divider>
                <Chip sx={{ backgroundColor: blue[600], color: "white" }} label=" ویرایش وضعیت وعده غذایی" ></Chip>
            </Divider>
            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                <Grid>
                    <TextField color='primary' label="وعده غذایی" value={title || ""} onChange={onTitleChange}></TextField>
                </Grid>
                <Grid>
                    <TextField color='primary' label="وضعیت" value={status || ""} onChange={onStatusChange}></TextField>
                </Grid>
                <Grid>
                    <Button sx={{ backgroundColor: blue[600] }} variant='contained' onClick={handleEdit}> ویرایش </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default EditMails;