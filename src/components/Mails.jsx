import { EditRounded } from '@mui/icons-material';
import { Container, ListItem } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Mails = ({ title, status, id }) => {

  return (
    <Container sx={{ display: "flex" }}>
      <Link to={`/editMail/${id}`}>
        <EditRounded color='info' cursor="pointer" />
      </Link>
      <ListItem>{status}</ListItem>
      <ListItem>{title}</ListItem>
    </Container>
  )
}

export default Mails;
