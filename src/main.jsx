import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddTask from './components/AddTask.jsx'
import AddTaskTime from './components/AddTaskTime.jsx'
import MainLayout from './components/layouts/MainLayout.jsx'
import EditTask from './components/EditTask.jsx'
import EditTaskTime from './components/EditTaskTime.jsx'
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css';
import EditMails from './components/EditMails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/addTask",
    element: (<MainLayout><AddTask /></MainLayout>)
  },
  {
    path: "/editTask/:taskId",
    element: (<MainLayout><EditTask /></MainLayout>)
  },
  {
    path: "/addTaskTime",
    element: (<MainLayout><AddTaskTime /></MainLayout>)
  },
  {
    path: "/editTaskTime/:taskTimeId",
    element: (<MainLayout><EditTaskTime /></MainLayout>)
  },
  {
    path: "/editMail/:mailId",
    element: (<MainLayout><EditMails /></MainLayout>)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </Provider>
  </StrictMode>,
)
