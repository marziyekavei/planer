import { Container, TextField } from "@mui/material";
import { useState } from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import jalaliday from 'jalaliday';

dayjs.extend(jalaliday);
dayjs.locale('fa');

const Date = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs().calendar('jalali'));

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
    }
    return (
        <Container sx={{ marginTop: "50px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="تاریخ"
                    value={selectedDate}
                    onChange={handleDateChange}
                    format='YYYY/MM/DD'
                />
            </LocalizationProvider>
        </Container>
    )
}

export default Date
