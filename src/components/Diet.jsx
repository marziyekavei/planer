import WatherCount from './WatherCount';
import Mails from './Mails';
import { Chip, Container, Divider, Typography } from '@mui/material';
import { useGetmailsQuery } from '../slice/apiSlice';
import { blue } from '@mui/material/colors';

const Diet = () => {
    const { data: diet, isSuccess } = useGetmailsQuery();
    return (
        <Container>
            <Divider>
                <Chip sx={{backgroundColor:blue[600], color:"white"}} label=" برنامه غذایی "></Chip>
            </Divider>
           
                <WatherCount />
          
            {isSuccess ? (
                diet.map((mail) => (
                    <Mails key={mail.id} title={mail.title} status={mail.status} id={mail.id}/>
                ))
            ) : (
                <Typography>خطا</Typography>
            )}
        </Container>
    )
}

export default Diet
