
import Tasks from "./components/Tasks"
import TasksTime from "./components/TasksTime"
import Diet from "./components/Diet"
import Date from "./components/Date"
import Grid from '@mui/material/Grid2';
import MainLayout from "./components/layouts/MainLayout"


function App() {

  return (
    <MainLayout>
      <div dir="rtl">
        <Grid container spacing={8} sx={{ marginTop: "20px", marginBottom: "20px", justifyContent: "center" }}>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <Tasks />
            <TasksTime />

          </Grid>
       
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <Diet />
            <Date />
          </Grid>
        </Grid>
      </div>
    </MainLayout>
  )
}

export default App

