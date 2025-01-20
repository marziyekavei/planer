import { Checkbox, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

const WatherCount = () => {

    const [count, setCount] = useState(0);

    const handleCheck = (e) => {
        const newCount = e.target.checked ? count + 1 : count - 1;
        setCount(newCount);
        if (newCount === 8) {
            toast.info(" آفرین! 8 تا لیوان آب خوردی ", {
                position: "top-right",
            })
        }
    }

    return (
        <Container sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginTop: "3px", gap: "5px" }}>
            <Typography whiteSpace="nowrap">{count} لیوان آب </Typography>
            {[...Array(8)].map((_, index) => (
                <Checkbox key={index} edge="start" disableRipple onChange={handleCheck} />
            ))}
        </Container>
    )
}

export default WatherCount;
